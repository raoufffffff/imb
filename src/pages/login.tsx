import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your authentication logic here
        if (email && password) {
            navigate("/"); // Redirect to home after login
        }
    };

    const loginWithGoogle = (): void => {
        // Add your Google login logic here (e.g., Firebase or OAuth)
        alert("جاري تسجيل الدخول بجوجل...");
    };

    return (
        <div className="min-h-screen flex justify-center">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg sm:shadow-none p-6">
                <div className="text-center">
                    <img src="/logo-2.png" alt="Logo" className="w-16 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">تسجيل الدخول لـ</p>
                    <h2 className="text-2xl font-bold text-[#0a5da6] mb-4">IMB</h2>
                </div>

                <form onSubmit={handleLogin} className="text-right">
                    <input
                        type="email"
                        placeholder="البريد الإلكتروني"
                        className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-[#0a5da6]"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="كلمة المرور"
                        className="w-full px-4 py-2 border rounded-lg mb-1 focus:outline-none focus:ring-2 focus:ring-[#0a5da6]"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        required
                    />

                    <div className="flex items-center justify-between my-3 text-sm text-gray-600">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-1" />
                            تذكرني
                        </label>
                        <a href="#" className="text-[#0a5da6] hover:underline">
                            هل نسيت كلمة السر؟
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#0a5da6] text-white py-2 rounded-lg my-3 hover:bg-[#084b8a] transition"
                    >
                        تسجيل الدخول
                    </button>
                </form>

                <div className="relative text-center my-8">
                    <span className="text-sm text-gray-400 bg-white px-2 z-10 relative">
                        أو تسجيل الدخول باستخدام
                    </span>
                    <div className="absolute left-0 right-0 top-2 h-px bg-gray-300 z-0"></div>
                </div>

                <button
                    onClick={loginWithGoogle}
                    className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg text-sm hover:bg-gray-100 transition"
                >
                    <FcGoogle className="text-xl mr-2" />
                    تسجيل الدخول باستخدام Google
                </button>

                <p className="text-center text-sm mt-4">
                    ليس لديك حساب؟
                    <Link to="/sin" className="text-[#0a5da6] hover:underline mx-2 ml-1">
                        إنشاء حساب
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;