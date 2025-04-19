import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BoostYourMoney = () => {
    const boostInfo = [
        {
            img: "/offer-2.webp",
            title: "معاملات آمنة",
            description: "تشفير عالي المستوى وحماية قوية لجميع معاملاتك المالية",
        },
        {
            img: "/offer-1.webp",
            title: "إدارة سهلة",
            description: "تتبع استثماراتك وإدارة أموالك بسهولة من أي مكان.",
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-r from-[#1b3d4e] to-[#0a2a38] text-white py-16 px-6 sm:px-10 lg:px-20"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    className="flex flex-col lg:flex-row justify-between items-center gap-10"
                >
                    <motion.div
                        className="w-full lg:w-[48%] flex flex-col"
                        variants={containerVariants}
                    >
                        <motion.h5
                            variants={itemVariants}
                            className="font-bold mb-6 text-3xl sm:text-4xl text-center lg:text-right text-white"
                        >
                            عزز أموالك مع IMB
                        </motion.h5>

                        <motion.p
                            variants={itemVariants}
                            className="text-[#b5e6ff] mb-8 text-center lg:text-right text-lg leading-relaxed"
                        >
                            سيحصل كل مستثمر على لوحة معلومات مزودة بمحفظة EthisX الإلكترونية المدمجة، مما يسمح للمستثمر بإدارة الاستثمارات بكفاءة ورؤية الأموال المتاحة بسهولة
                        </motion.p>

                        <motion.div
                            variants={containerVariants}
                            className="flex flex-col gap-6 mb-8"
                        >
                            {boostInfo.map((item, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    className={`flex items-center gap-6 p-5 rounded-xl bg-[#ffffff08] backdrop-blur-sm $`}
                                >
                                    <motion.img
                                        initial={{ scale: 0.9 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="w-16 h-16 object-contain"
                                        src={item.img}
                                        alt={item.title}
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-[#37d3ba] font-bold text-xl mb-2">
                                            {item.title}
                                        </span>
                                        <span className="text-[#d1f7ff] text-sm">
                                            {item.description}
                                        </span>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
                            <Link
                                to="/log"
                                className="bg-[#37d3ba] hover:bg-[#2bbba4] text-white font-bold py-3 px-12 rounded-xl transition-all duration-300
                                shadow-lg hover:shadow-xl hover:shadow-[#37d3ba30] flex items-center gap-2"
                            >
                                ابدأ الآن
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={imageVariants}
                        className="w-full lg:w-[48%] mt-10 lg:mt-0 flex justify-center"
                    >
                        <motion.img
                            whileHover={{ scale: 1.03 }}
                            src="/boost.webp"
                            alt="Boost your money with IMB"
                            className="max-w-full h-auto rounded-lg "
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default BoostYourMoney;