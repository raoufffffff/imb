import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { InvestmentProperty } from "../../data";

const InvestTypeCard = ({ item }: { item: InvestmentProperty }) => {
    const isResidential = item.type === "عقار سكني";

    return (
        <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-11/12 mx-auto shadow-2xl"
        >
            <Link
                to={`/invest/${item.id}`}
                className={`group block rounded-xl overflow-hidden transition-all duration-300 
                    ${isResidential ? 'bg-gradient-to-br from-blue-50 to-white' : 'bg-gradient-to-br from-amber-50 to-white'}
                    shadow-md hover:shadow-xl border border-gray-100`}
            >
                {/* Image with subtle overlay */}
                <div className="h-48 overflow-hidden relative">
                    <img
                        src={item.img[0]}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold shadow-sm
                        ${isResidential ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}`}>
                        {item.type}
                    </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 line-clamp-1">{item.name}</h2>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {item.location}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 p-2 rounded-lg">
                            <p className="text-xs text-gray-500">أقل استثمار</p>
                            <p className="font-medium text-green-700">
                                {item.min_investment_dzd.toLocaleString()} دج
                            </p>
                        </div>

                        <div className="bg-gray-50 p-2 rounded-lg">
                            <p className="text-xs text-gray-500">التكلفة الإجمالية</p>
                            <p className="font-medium text-blue-700">
                                {item.total_cost_dzd.toLocaleString()} دج
                            </p>
                        </div>
                    </div>

                    {/* Property type specific details */}
                    {isResidential ? (
                        <div className="flex justify-between text-xs text-gray-600">
                            <span>🛏️ {item.structure.units} وحدة</span>
                            <span>🏢 {item.structure.floors} طوابق</span>
                            <span>🅿️ {item.parking.spaces} موقف</span>
                        </div>
                    ) : (
                        <div className="flex justify-between text-xs text-gray-600">
                            <span>🏢 {item.offices} مكتب</span>
                            <span>🔧 {item.renovation_dzd.toLocaleString()} دج تجديد</span>
                            <span>📊 {item.revenue_split.imb}% IMB</span>
                        </div>
                    )}

                    <div className={`pt-2 border-t border-gray-100 flex items-center justify-between`}>
                        <p className="text-sm text-gray-700 line-clamp-1">📈 {item.returns}</p>
                        <span className={`text-xs px-2 py-1 rounded-full 
                            ${isResidential
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-amber-100 text-amber-800'}`}>
                            {isResidential ? `${item.risk_percent}% مخاطر` : 'مخاطر منخفضة'}
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default InvestTypeCard;