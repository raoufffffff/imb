import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";

const states = ["الجزائر", "وهران", "سطيف", "عنابة", "قسنطينة", "تيزي وزو", "البليدة"];

interface FormData {
    name: string;
    email: string;
    phone: string;
    password: string;
    state: string;
    role: string;
}

const Signin = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        password: "",
        state: "",
        role: "",
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        navigate("/log");
    };

    useEffect(() => {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
    }, [])

    return (
        <div className="min-h-screen flex justify-center">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg sm:shadow-none p-6">
                <div className="text-center">
                    <img src="/logo-2.png" alt="Logo" className="w-16 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">تسجيل الدخول لـ</p>
                    <h2 className="text-2xl font-bold text-[#0a5da6] mb-4">IMB</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        type="text"
                        name="name"
                        placeholder="الاسم الكامل"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a5da6]"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="البريد الإلكتروني"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a5da6]"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="رقم الهاتف"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a5da6]"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="كلمة المرور"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a5da6]"
                    />

                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#0a5da6]"
                    >
                        <option value="">اختر الولاية</option>
                        {states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>

                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#0a5da6]"
                    >
                        <option value="">نوع الحساب</option>
                        <option value="investor">مستثمر</option>
                        <option value="developer">مطور عقاري</option>
                    </select>

                    <button
                        type="submit"
                        className="w-full bg-[#0a5da6] text-white py-2 rounded-lg hover:bg-[#084b8a] transition"
                    >
                        إنشاء الحساب
                    </button>
                </form>

                <div className="relative text-center my-8">
                    <span className="text-sm text-gray-400 bg-white px-2 z-10 relative">
                        أو تسجيل الدخول باستخدام
                    </span>
                    <div className="absolute left-0 right-0 top-2 h-px bg-gray-300 z-0"></div>
                </div>

                <button
                    className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg text-sm hover:bg-gray-100 transition"
                >
                    <FcGoogle className="text-xl mr-2" />
                    تسجيل الدخول باستخدام Google
                </button>

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