import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const states = ["الجزائر", "وهران", "سطيف", "عنابة", "قسنطينة", "تيزي وزو", "البليدة"];

interface FormData {
    name: string;
    email: string;
    phone: string;
    password: string;
    state: string;
    type: string;
}

const Signin = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
        phone: "",
        type: "",
        state: "",
    });
    const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        setTouched({ ...touched, [e.target.name]: true });
    };

    const isInvalid = (name: string) => touched[name] && !formData[name as keyof FormData];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emptyFields = Object.entries(formData).filter(([, v]) => !v).map(([k]) => k);
        if (emptyFields.length > 0) {
            toast.error("يرجى ملء جميع الحقول");
            const newTouched: { [key: string]: boolean } = {};
            emptyFields.forEach((k) => newTouched[k] = true);
            setTouched({ ...touched, ...newTouched });
            return;
        }
        submit();
    };

    const submit = async () => {
        setloading(true);
        try {
            const res = await axios.post(`https://imb-api.vercel.app/user`, formData);
            if (res.data.status) {
                toast.success("تم إنشاء الحساب بنجاح");
                setTimeout(() => {
                    navigate(`/confirm/${res.data.data._id}`);
                }, 1000);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("فشل الاتصال بالخادم");
        } finally {
            setloading(false);
        }
    };

    useEffect(() => {
        window.scrollTo({ behavior: "smooth", top: 0 });
    }, []);

    return (
        <div className="min-h-screen flex justify-center">
            <ToastContainer />
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
                <div className="text-center">
                    <img src="/logo-2.png" alt="Logo" className="w-16 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">تسجيل الدخول لـ</p>
                    <h2 className="text-2xl font-bold text-[#0a5da6] mb-4">IMB</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 text-right">
                    {[
                        { name: "name", type: "text", placeholder: "الاسم الكامل" },
                        { name: "email", type: "email", placeholder: "البريد الإلكتروني" },
                        { name: "phone", type: "tel", placeholder: "رقم الهاتف" },
                        { name: "password", type: "password", placeholder: "كلمة المرور" }
                    ].map(({ name, type, placeholder }) => (
                        <input
                            key={name}
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            value={formData[name as keyof FormData]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a5da6] ${isInvalid(name) ? "border-red-500" : ""}`}
                        />
                    ))}

                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#0a5da6] ${isInvalid("state") ? "border-red-500" : ""}`}
                    >
                        <option value="">اختر الولاية</option>
                        {states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>

                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#0a5da6] ${isInvalid("type") ? "border-red-500" : ""}`}
                    >
                        <option value="">نوع الحساب</option>
                        <option value="investor">مستثمر</option>
                        <option value="developer">مطور عقاري</option>
                    </select>

                    <button
                        type="submit"
                        className="w-full flex justify-center items-center bg-[#1b3d4e] text-white py-2 rounded-lg hover:bg-[#084b8a]  transition"
                        disabled={loading}
                    >
                        {loading && (
                            <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"></path>
                            </svg>
                        )}
                        {loading ? "جارٍ انشاء الحساب..." : "إنشاء الحساب"}
                    </button>
                </form>

                <p className="text-center text-sm mt-4">
                    لديك حساب؟{" "}
                    <Link to="/log" className="text-[#0a5da6] hover:underline">
                        تسجيل الدخول
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signin;
