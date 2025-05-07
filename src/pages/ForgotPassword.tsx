import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useSearchParams } from "react-router-dom";
import { FiMail, FiKey, FiCheckCircle } from "react-icons/fi";

const ForgotPassword = () => {
    const [step, setStep] = useState(1); // 1: email, 2: code, 3: new password
    const [email, setEmail] = useState("");
    const [id, setid] = useState("");
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [searchparams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const idParam = searchparams.get('id');
        if (idParam) {
            setid(idParam);
            setStep(3);
        }
    }, [searchparams]);


    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.put(`https://imb-api.vercel.app/user/email/password`, { email });
            if (res.data.status) {
                toast.success("تم إرسال رمز إلى بريدك الإلكتروني");
                setid(res.data.id);
                setStep(2);
            } else {
                toast.warning(res.data.message);
            }
        } catch {
            toast.error("فشل إرسال الرمز، تحقق من البريد الإلكتروني");
        }
    };

    const handleCodeSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.get(`https://imb-api.vercel.app/user/${id}`);
            if (res.data.status && res.data.data.code === code) {
                toast.success("تم التحقق من الرمز");
                setStep(3);
            } else {
                toast.error("الرمز غير صحيح");
            }
        } catch {
            toast.error("فشل في التحقق من الرمز");
        }
    };

    const handlePasswordReset = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.put(`https://imb-api.vercel.app/user/${id}`, { password: newPassword })
                .then(res => {
                    if (res.data.status) {
                        toast.success("تم تحديث كلمة المرور بنجاح");
                        localStorage.setItem("user", JSON.stringify(res.data.data))
                        setTimeout(() => navigate("/dashboard"), 1000);
                        return
                    }
                    toast.error("حدث خطأ أثناء");

                })
            setStep(1);
            setEmail("");
            setCode("");
            setNewPassword("");
        } catch {
            toast.error("فشل تحديث كلمة المرور");
        }
    };

    const steps = [
        { title: "إرسال البريد", icon: <FiMail size={24} />, active: step === 1 },
        { title: "التحقق من الرمز", icon: <FiCheckCircle size={24} />, active: step === 2 },
        { title: "كلمة مرور جديدة", icon: <FiKey size={24} />, active: step === 3 },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 text-right">
            <ToastContainer />
            <motion.div
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* الخط الزمني للخطوات */}
                <div className="flex justify-between mb-6">
                    {steps.map((s, idx) => (
                        <div key={idx} className={`flex flex-col items-center text-sm ${s.active ? 'text-[#0a5da6]' : 'text-gray-400'}`}>
                            <div className={`mb-1 p-2 rounded-full ${s.active ? 'bg-[#0a5da6] text-white' : 'bg-gray-200'}`}>
                                {s.icon}
                            </div>
                            {s.title}
                        </div>
                    ))}
                </div>

                {/* عرض البريد الحالي إذا كان موجودًا */}
                {email && step !== 1 && (
                    <p className="text-sm text-gray-500 mb-2 text-center">البريد: <span className="font-semibold">{email}</span></p>
                )}

                {/* النموذج حسب المرحلة */}
                {step === 1 && (
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                        <h2 className="text-xl font-bold text-[#0a5da6]">نسيت كلمة المرور</h2>
                        <p className="text-sm text-gray-600">أدخل بريدك الإلكتروني لإرسال رمز التحقق</p>
                        <input
                            type="email"
                            placeholder="البريد الإلكتروني"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        />
                        <button type="submit" className="w-full bg-[#0a5da6] text-white py-2 rounded-lg hover:bg-[#084d8c] transition">
                            إرسال الرمز
                        </button>
                    </form>
                )}

                {step === 2 && (
                    <form onSubmit={handleCodeSubmit} className="space-y-4">
                        <h2 className="text-lg font-bold text-[#0a5da6]">تحقق من الرمز</h2>
                        <p className="text-sm text-gray-600">أدخل الرمز المرسل إلى بريدك الإلكتروني</p>
                        <input
                            type="text"
                            placeholder="رمز التحقق"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        />
                        <button type="submit" className="w-full bg-[#0a5da6] text-white py-2 rounded-lg hover:bg-[#084d8c] transition">
                            تحقق
                        </button>
                    </form>
                )}

                {step === 3 && (
                    <form onSubmit={handlePasswordReset} className="space-y-4">
                        <h2 className="text-lg font-bold text-[#0a5da6]">كلمة مرور جديدة</h2>
                        <input
                            type="password"
                            placeholder="كلمة المرور الجديدة"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        />
                        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                            تحديث كلمة المرور
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
    );
};

export default ForgotPassword;
