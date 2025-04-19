import { useState } from "react";
import { motion } from "framer-motion";
import data from "../data";
import Titel from "../computent/Titel";
import ProjectCard from "../computent/ProjectCard";
import { useSearchParams } from "react-router-dom";

const Invest = () => {
    const [searchparams] = useSearchParams();
    const [type, setType] = useState(searchparams.get('type') || "الكل");

    let filteredData = data;
    if (type !== "الكل") {
        filteredData = data.filter(e => e.type === type);
    }

    return (
        <div className="w-full pb-20">
            <Titel
                titel={"ابحث عن استثمار المستقبل"}
                sumititel={"الصفقات ما قبل الإطلاق"}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl mx-auto mt-8 flex flex-col md:flex-row justify-center items-center gap-4"
            >
                <div className="w-full flex justify-center md:w-1/2">
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-10/12 p-3 rounded-xl bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a5da6]"
                    >
                        <option value="الكل">الكل</option>
                        <option value="عقار صناعي">عقار صناعي</option>
                        <option value="عقار سكني">عقار سكني</option>
                        <option value="عقار زراعي">عقار زراعي</option>
                        <option value="عقار سياحي">عقار سياحي</option>
                        <option value="عقار تجاري">عقار تجاري</option>
                    </select>
                </div>
            </motion.div>

            {filteredData.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center mt-16 text-center"
                >
                    <div className="bg-[#f8f9fa] p-8 rounded-2xl shadow-sm max-w-md w-full">
                        <h3 className="text-2xl font-bold text-[#0a5da6] mb-4">
                            قريباً إن شاء الله
                        </h3>
                        <p className="text-gray-600 mb-6">
                            لا توجد مشاريع متاحة حالياً في هذه الفئة. نحن نعمل على إضافة مشاريع جديدة قريباً.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#0a5da6] text-white px-6 py-2 rounded-lg font-medium"
                            onClick={() => setType("الكل")}
                        >
                            عرض جميع المشاريع
                        </motion.button>
                    </div>
                </motion.div>
            ) : (
                <div
                    className="flex flex-wrap gap-3 mt-10 justify-center items-center"
                >
                    {filteredData.map((project) => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Invest;