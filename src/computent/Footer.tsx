import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            className="text-white py-12 px-6 w-full overflow-x-hidden"
            style={{
                backgroundImage: "url('/footer.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#1b3d4e",
            }}
        >
            <div className="max-w-7xl mx-auto flex flex-row-reverse justify-around flex-wrap  text-center md:text-right">
                {/* Contact Info */}
                <div
                    className="flex flex-col my-2 sm:my-0 items-start "
                >
                    <h4 className="text-[#37d3ba] mx-auto text-lg font-bold mb-4 text-center">Contact</h4>
                    <p className="flex mx-auto justify-center md:justify-end items-center gap-2 ">
                        <FaPhoneAlt /> +213 0776966468
                    </p>
                    <p className="flex mx-auto justify-center md:justify-end items-center gap-2 mt-2">
                        <FaEnvelope /> support@imb.com
                    </p>
                    <p className="flex text-center mx-auto justify-center md:justify-end items-center gap-2 mt-2 leading-snug">
                        <FaMapMarkerAlt />baraki alger, city touileb, <br />
                        alger baraki
                    </p>
                    <div className="flex  justify-center md:justify-end gap-3 mt-4 text-[#1b3d4e]">
                        <a href="#"><FaWhatsapp
                            className="bg-[#37d3ba] text-4xl hover:scale-105 text-white rounded-full p-2" /></a>
                        <a href="#"><FaInstagram
                            className="bg-[#37d3ba] text-4xl hover:scale-105 text-white rounded-full p-2" /></a>
                        <a href="#"><FaLinkedin
                            className="bg-[#37d3ba] text-4xl hover:scale-105 text-white rounded-full p-2" /></a>
                        <a href="#"><FaTwitter
                            className="bg-[#37d3ba] text-4xl hover:scale-105 text-white rounded-full p-2" /></a>
                        <a href="#"><FaFacebookF
                            className="bg-[#37d3ba] text-4xl hover:scale-105 text-white rounded-full p-2" /></a>
                    </div>
                </div>

                {/* Explore Links */}
                <div
                    className="my-2 sm:my-0"
                >
                    <h4 className="text-[#37d3ba] text-lg font-bold mb-4">Explore</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#">سياسة الخصوصية</a></li>
                        <li><a href="#">بيان المخاطر</a></li>
                        <li><a href="#">شروط وأحكام المستخدم</a></li>
                        <li><a href="#">بيان الإفصاح عن المعلومات</a></li>
                        <li><a href="#">الأسئلة المتكررة</a></li>
                    </ul>
                </div>

                {/* Logo */}
                <div className="flex flex-col items-center md:items-end">
                    <img src="/footer-logo.png" alt="ETHIS" className="w-32 mb-4 mx-auto" />
                    <p className="text-sm mt-2">All Copyright 2025 by EthisX.co ©</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
