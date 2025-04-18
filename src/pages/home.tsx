import { Link } from "react-router"; // تأكد أنك تستخدم react-router-dom
import { motion } from "framer-motion";



export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/home.jpg')",
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
        className="relative z-20 text-center max-w-2xl mx-auto"
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-snug mb-6">
          استثمر أو اطلب التمويل<br />
          بشكل أخلاقي من جميع أنحاء العالم
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex justify-center gap-4"
        >
          <Link
            className="bg-[#0a5da6] hover:bg-[#084c8a] transition-colors text-white font-semibold rounded-xl w-[160px] py-3 text-center"
            to="/invest"
          >
            إستثمر
          </Link>
          <Link
            className="border border-[#0a5da6] hover:bg-[#0a5da6] transition-colors text-white font-semibold rounded-xl w-[160px] py-3 text-center"
            to="/"
          >
            اطلب التمويل
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
