import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [body, setbody] = useState({
        email: "",
        password: ""
    });
    const [loading, setloading] = useState(false);
    const [errFields, setErrFields] = useState<{ email: boolean; password: boolean }>({ email: false, password: false });
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // التحقق من الحقول
        const emailEmpty = !body.email.trim();
        const passwordEmpty = !body.password.trim();

        setErrFields({
            email: emailEmpty,
            password: passwordEmpty
        });

        if (!emailEmpty && !passwordEmpty) {
            submit();
        } else {
            toast.error("يرجى ملء جميع الحقول");
        }
    };

    const submit = async () => {
        setloading(true);
        try {
            const res = await axios.post(`https://imb-api.vercel.app/user/login`, body);
            if (res.data.status) {
                toast.success("تم تسجيل الدخول بنجاح");
                setTimeout(() => {
                    if (res.data.data.isConfirm) {
                        navigate("/dashboard");
                        localStorage.setItem("user", JSON.stringify(res.data.data))
                    } else {
                        navigate(`/confirm/${res.data.data._id}`);
                    }
                }, 1000);
            } else {
                toast.error("بيانات الدخول غير صحيحة");
            }
        } catch (error) {
            console.log(error);
            toast.error("حدث خطأ أثناء الاتصال بالخادم");
        } finally {
            setloading(false);
        }
    };

    useEffect(() => {
        window.scrollTo({ behavior: "smooth", top: 0 });
    }, []);

    return (
        <div className="py-10 flex justify-center items-center bg-gray-100">
            <ToastContainer />
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
                <div className="text-center">
                    <img src="/logo-2.png" alt="Logo" className="w-16 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">تسجيل الدخول لـ</p>
                    <h2 className="text-2xl font-bold text-[#1b3d4e] mb-4">IMB</h2>
                </div>

                <form onSubmit={handleLogin} className="text-right">
                    <input
                        type="email"
                        placeholder="البريد الإلكتروني"
                        className={`w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 ${errFields.email ? "border-red-500 ring-red-300" : "focus:ring-[#1b3d4e]"}`}
                        value={body.email}
                        onChange={(e) => {
                            setbody({ ...body, email: e.target.value });
                            setErrFields({ ...errFields, email: false });
                        }}
                    />

                    <input
                        type="password"
                        placeholder="كلمة المرور"
                        className={`w-full px-4 py-2 border rounded-lg mb-1 focus:outline-none focus:ring-2 ${errFields.password ? "border-red-500 ring-red-300" : "focus:ring-[#1b3d4e]"}`}
                        value={body.password}
                        onChange={(e) => {
                            setbody({ ...body, password: e.target.value });
                            setErrFields({ ...errFields, password: false });
                        }}
                    />

                    <div className="flex items-center justify-between my-3 text-sm text-gray-600">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-1" />
                            تذكرني
                        </label>
                        <Link
                            to={'/forgotPassword'}
                            className="text-[#1b3d4e] hover:underline">
                            هل نسيت كلمة السر؟
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#1b3d4e] text-white py-2 rounded-lg my-3 hover:bg-[#084b8a] transition flex items-center justify-center"
                        disabled={loading}
                    >
                        {loading ? (
                            <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"></path>
                            </svg>
                        ) : null}
                        {loading ? "جارٍ الدخول..." : "تسجيل الدخول"}
                    </button>
                </form>

                <p className="text-center text-sm mt-4">
                    ليس لديك حساب؟
                    <Link to="/sin" className="text-[#1b3d4e] hover:underline mx-2 ml-1">
                        إنشاء حساب
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
