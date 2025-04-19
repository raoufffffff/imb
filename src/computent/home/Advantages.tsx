import { motion } from "framer-motion";
import { FaGlobe, FaUsers, FaInfoCircle, FaCogs } from "react-icons/fa";

const advantages = [
    {
        title: "متوافقة مع أحكام الشريعة",
        icon: <FaGlobe className="text-3xl" />,
        description:
            "تتوافق IMB مع مبادئ الشريعة التي تضمن معاملة عادلة ومنصفة لكل من المصدرين والمستثمرين، خصوصاً عند تقاسم المخاطر والمكافآت.",
        color: "bg-[#0a5da6]",
    },
    {
        title: "جزء من مجموعة دولية",
        icon: <FaCogs className="text-3xl" />,
        description:
            "IMB هي جزء من مجموعة ذات خبرة دولية، يقودها مجلس إدارة وفريق إداري متمرس لتحقيق نتائج فعالة ومستدامة.",
        color: "bg-[#4caf50]",
    },
    {
        title: "تجمع عالمي من المستثمرين",
        icon: <FaInfoCircle className="text-3xl" />,
        description:
            "يمكن للمصدرين الوصول إلى قائمة IMB التي تضم مستثمرين عالميين من ذوي الملاءة المالية العالية والمؤسسات الاستثمارية.",
        color: "bg-[#f44336]",
    },
    {
        title: "مجتمع قائم",
        icon: <FaUsers className="text-3xl" />,
        description:
            "بفضل التوجيهات التنظيمية، تقدم IMB نموذج تمويل نظير إلى نظير (P2P) وتمويل أسهم طويل الأجل داخل وخارج البلاد.",
        color: "bg-[#ff9800]",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const Advantages = () => {
    return (
        <div className="bg-gradient-to-br from-[#f8fafc] to-[#f0f7ff] py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center text-3xl md:text-4xl font-bold mb-16 text-[#0a5da6]"
                >
                    مزايا IMB
                </motion.h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advantages.map((adv, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={index}
                            whileHover={{
                                y: -8,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                            className="bg-white rounded-xl p-6 flex flex-col items-center text-center h-full
              shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <div className={`${adv.color} rounded-full p-4 mb-6 text-white shadow-lg`}>
                                {adv.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">{adv.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {adv.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Advantages;