import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import InvestmentTypesData from "../InvestmentTypesData";
import InvestTypeContainer from "../computent/investType/investTypeContainer";
import { useEffect } from "react";

const InvestType = () => {
    const { id } = useParams();
    const item = InvestmentTypesData.find((el) => el.type === id);
    useEffect(() => {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
    }, [])
    if (!item) {
        return <div className="text-center text-red-500 mt-10">نوع الاستثمار غير موجود</div>;
    }

    return (
        <div className="w-full min-h-screen bg-white">
            {/* منطقة الفيديو */}
            <div className="relative w-full h-[100vh] overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src={item.vidio}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

                {/* النصوص فوق الفيديو */}
                <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4 space-y-6">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {item.titel}
                    </motion.h1>

                    <motion.h2
                        className="text-xl md:text-2xl font-medium bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        {item.subtitle}
                    </motion.h2>

                    <motion.p
                        className="max-w-2xl text-sm md:text-lg bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        {item.GeneralInformation}
                    </motion.p>
                </div>
            </div>
            <div className="max-w-5xl mx-auto px-4 py-3 space-y-8">
                <h3 className="text-xl font-bold mt-4 mb-2">الاستثمارات المتوفرة عدنا في هذا النوع</h3>
                <InvestTypeContainer type={id} />
            </div>
            {/* باقي المحتوى */}
            <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
                <div>
                    <h3 className="text-xl font-bold mt-4 mb-2">أنواع العقارات:</h3>
                    <ul className="list-disc pr-6 text-gray-700">
                        {item.TypesOfRealEstate.map((type, idx) => (
                            <li key={idx}>{type}</li>
                        ))}
                    </ul>
                </div>


                <div>
                    <h3 className="text-xl font-bold mt-4 mb-2">العوائد المحتملة:</h3>
                    <p className="text-green-700">{item.profits}</p>
                </div>

                <div>
                    <h3 className="text-xl font-bold mt-4 mb-2">تفاصيل شاملة:</h3>
                    <p className="text-gray-700 whitespace-pre-wrap">{item.LongDes}</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mt-4 mb-2">المخاطر:</h3>
                    <ul className="list-disc pr-6 text-red-600">
                        {item.Risks.map((risk, idx) => (
                            <li key={idx}>{risk}</li>
                        ))}
                    </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {item.imgs.map((imgSrc, idx) => (
                        <img key={idx} src={imgSrc} alt={`صورة ${idx}`} className="rounded-xl shadow-md" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InvestType;
