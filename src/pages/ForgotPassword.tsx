import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    const [step, setStep] = useState(1); // 1: email, 2: code, 3: new password
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.put(`https://imb-api.vercel.app/user/newone`, { email });
            toast.success("تم إرسال رمز إلى بريدك الإلكتروني");
            setStep(2);
        } catch {
            toast.error("فشل إرسال الرمز، تحقق من البريد الإلكتروني");
        }
    };

    const handleCodeSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.get(`https://imb-api.vercel.app/user/email/${email}`);
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
            await axios.put(`https://imb-api.vercel.app/user/reset-password`, {
                email,
                newPassword,
            });
            toast.success("تم تحديث كلمة المرور بنجاح");
            setStep(1);
            setEmail("");
            setCode("");
            setNewPassword("");
        } catch {
            toast.error("فشل تحديث كلمة المرور");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 text-right">
            <ToastContainer />
            <motion.div
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
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
                        <button type="submit" className="w-full bg-[#0a5da6] text-white py-2 rounded-lg">
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
                        <button type="submit" className="w-full bg-[#0a5da6] text-white py-2 rounded-lg">
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
                        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg">
                            تحديث كلمة المرور
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
    );
};

export default ForgotPassword;
