import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";

const investmentTypes = [
    {
        title: "عقار سكني",
        color: "#0a5da6",
        icon: "/residential.jpg",
        description: "الاستثمار في الشقق والمجمعات السكنية لتأجيرها أو إعادة بيعها.",
    },
    {
        title: "عقار صناعي",
        color: "#ffc107",
        icon: "/industrial.jpg",
        description: "المستودعات والمصانع والمباني التي تُستخدم للأغراض الصناعية.",
    },
    {
        title: "عقار زراعي",
        color: "#4caf50",
        icon: "/agricultural.jpg",
        description: "شراء الأراضي الزراعية للاستثمار في الزراعة أو التأجير للمزارعين.",
    },
    {
        title: "عقار سياحي",
        color: "#f44336",
        icon: "/tourism.jpg",
        description: "الفنادق والنُزل والمباني في المناطق السياحية لجذب الزوار.",
    },
    {
        title: "عقار تجاري",
        color: "#9c27b0",
        icon: "/commercial.jpg",
        description: "المحلات والمكاتب والمراكز التجارية ذات العوائد المرتفعة.",
    },
];

const InvestmentCards = () => {
    return (
        <div className="w-full px-4 py-10 bg-gradient-to-b ">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <h3 className="text-4xl font-bold text-center mb-4 text-[#0a5da6]">
                    أنواع الاستثمار العقاري
                </h3>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    اكتشف مجموعة متنوعة من الفرص الاستثمارية العقارية التي تناسب أهدافك المالية
                </p>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    className="relative pb-12"
                >
                    {investmentTypes.map((type, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="relative bg-white rounded-xl shadow-xl overflow-hidden h-96 flex flex-col"
                            >
                                <Link
                                    to={`/invest/?type=${type.title}`}
                                >

                                    <div className="relative h-1/2 overflow-hidden">
                                        <img
                                            src={type.icon}
                                            alt={type.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0"
                                            style={{ background: `linear-gradient(to top, ${type.color}33, transparent)` }}
                                        ></div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-6 flex flex-col">
                                        <div
                                            className="w-12 h-1 mb-4"
                                            style={{ backgroundColor: type.color }}
                                        ></div>
                                        <h3 className="text-2xl font-bold mb-3 text-gray-800">{type.title}</h3>
                                        <p className="text-gray-600 mb-4 flex-1">{type.description}</p>
                                        <button
                                            className="mt-auto px-4 py-2 rounded-lg font-medium self-start"
                                            style={{
                                                backgroundColor: `${type.color}22`,
                                                color: type.color,
                                            }}
                                        >
                                            اكتشف المزيد
                                        </button>
                                    </div>
                                </Link>
                            </motion.div>
                        </SwiperSlide>
                    ))}

                    {/* Custom Navigation Arrows */}

                </Swiper>
            </motion.div>
        </div>
    );
};

export default InvestmentCards;