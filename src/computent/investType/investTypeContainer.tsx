import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import InvestTypeCrad from "./InvestTypeCrad";
import { properties } from "../../data";

const InvestTypeContainer = ({ type }: { type: string | undefined }) => {
    const investTypeData = properties.filter(e => e.type === type);

    if (investTypeData.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center mt-20 mb-20 text-center text-gray-600">

                <h2 className="text-2xl font-semibold">قريبًا</h2>
                <p className="mt-2 text-sm text-gray-500">مشاريع هذا النوع من العقارات ستُضاف قريبًا، تابعنا!</p>
            </div>
        );
    }

    return (
        <div className="mt-10 py-2 h-fit">
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
                {investTypeData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <InvestTypeCrad key={item.id} item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default InvestTypeContainer;
