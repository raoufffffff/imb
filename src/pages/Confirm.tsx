import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
    name: string;
    email: string;
    phone: string;
    password: string;
    state: string;
    type: string;
    code: string;
}

const Confirm = () => {
    const { id } = useParams();
    const [user, setUser] = useState<FormData | null>(null);
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);
    const [timer, setTimer] = useState(60);
    const [resendDisabled, setResendDisabled] = useState(true);
    const navigate = useNavigate();

    // جلب بيانات المستخدم
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`https://imb-api.vercel.app/user/${id}`);
                if (res.data.status) {
                    setUser(res.data.data);
                } else {
                    setErr(true);
                }
            } catch (error) {
                console.log(error);
                setErr(true);
            } finally {
                setLoading(false);
            }
        };
        getUser();
    }, [id]);

    // مؤقت إعادة الإرسال
    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(countdown);
        } else {
            setResendDisabled(false);
        }
    }, [timer]);

    // إرسال رمز جديد
    const handleResend = async () => {
        try {
            await axios.put(`https://imb-api.vercel.app/user/newone`, {
                email: user?.email,
            });
            toast.success("تم إرسال رمز جديد إلى بريدك الإلكتروني");
            setTimer(60);
            setResendDisabled(true);
        } catch (error) {
            console.log(error);
            toast.error("فشل الاتصال بالخادم");
        }
    };

    // التحقق من الرمز
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!code.trim()) {
            toast.error("يرجى إدخال الرمز");
            return;
        }

        if (user?.code === code) {
            toast.success("تم التحقق بنجاح");
            setTimeout(() => navigate("/dashboard"), 1000);
        } else {
            toast.error("الرمز غير صحيح");
        }
    };

    if (loading) return <div className="text-center p-10">جاري التحميل...</div>;
    if (err) return <div className="text-center p-10 text-red-600">حدث خطأ في تحميل البيانات</div>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 text-right">
            <ToastContainer />
            <motion.div
                className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-xl font-bold text-[#0a5da6] mb-2">تأكيد الحساب</h2>
                <p className="text-sm text-gray-600 mb-4">
                    تم إرسال رمز إلى بريدك الإلكتروني: <strong>{user?.email}</strong>
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="code"
                        placeholder="أدخل الرمز هنا"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a5da6]"
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#0a5da6] text-white py-2 rounded-lg hover:bg-[#084b8a] transition"
                    >
                        تأكيد
                    </button>
                </form>

                <div className="mt-4 text-center text-sm text-gray-700">
                    {resendDisabled ? (
                        <>يمكنك إعادة إرسال الرمز خلال {timer} ثانية</>
                    ) : (
                        <button
                            onClick={handleResend}
                            className="text-[#0a5da6] hover:underline"
                        >
                            إرسال رمز جديد
                        </button>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default Confirm;
