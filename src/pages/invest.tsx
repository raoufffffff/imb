import { useState } from "react";
import { motion } from "framer-motion";
import data from "../data";
import Titel from "../computent/Titel";
import ProjectCard from "../computent/ProjectCard";


const Invest = () => {
    const [type, setType] = useState("الكل");
    let a = data
    if (type != "الكل") {
        a = data.filter(e => e.type == type)
    }
    return (
        <div className="w-full">
            <Titel />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl mx-auto mt-8 flex flex-col md:flex-row justify-center items-center gap-4"
            >
                <div className="w-full flex justify-center md:w-1/2">
                    <select
                        value={type}
                        onChange={(e) => setType(e.currentTarget.value)}
                        className="w-10/12 p-3 rounded-xl bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a5da6]"
                    >
                        <option value="الكل">الكل</option>
                        <option value="عقار صناعي">عقار صناعي</option>
                        <option value="عقار سكني">عقار سكني</option>
                    </select>
                </div>
            </motion.div>
            <div
                className="flex flex-wrap gap-3 mt-10 justify-center items-center"
            >
                {a.map(e => (
                    <ProjectCard project={e} key={e.id} />
                ))}
            </div>
        </div>
    );
};

export default Invest;
