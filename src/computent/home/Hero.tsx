import { Link } from "react-router"; // تأكد أنك تستخدم react-router-dom
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <div
            style={{
                backgroundImage: "url('/home-2.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="w-full min-h-[88vh] relative pt-32 px-4"
        >
            <div className="absolute w-full h-full top-0 left-0 bg-black/60 z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-20 text-center sm:text-right "
            >
                <h1 className="text-white text-4xl md:text-5xl font-bold leading-snug mb-6">
                    استثمر أو اطلب التمويل<br />
                    بشكل أخلاقي من جميع أنحاء العالم
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="flex justify-center sm:justify-start sm:mt-10 gap-4"
                >
                    <Link
                        className="bg-[#1b3d4e] hover:bg-[#084c8a] transition-colors text-white font-semibold rounded-xl w-[160px] py-3 text-center"
                        to="/invest"
                    >
                        إستثمر
                    </Link>
                    <Link
                        className="border border-[#1b3d4e] hover:bg-[#1b3d4e] transition-colors text-white font-semibold rounded-xl w-[160px] py-3 text-center"
                        to="/"
                    >
                        اطلب التمويل
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero