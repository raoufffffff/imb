interface RevenueSplit {
    imb: number;
    startup: number;
}

interface Contributions {
    in_kind: number;
    developer: number;
    public: number;
}

interface Structure {
    units: number;
    unit_price_dzd: number;
    floors: number;
}

interface Parking {
    spaces: number;
    space_price_dzd: number;
}

interface ResidentialProperty {
    img: string[];
    id: string;
    name: string;
    type: "عقار سكني";
    location: string;
    min_investment_dzd: number;
    total_cost_dzd: number;
    contributions: Contributions;
    structure: Structure;
    parking: Parking;
    risk_percent: number;
    returns: string;
}

interface IndustrialProperty {
    img: string[];
    id: string;
    name: string;
    type: "عقار صناعي";
    location: string;
    min_investment_dzd: number;
    total_cost_dzd: number;
    garage_cost_dzd: number;
    renovation_dzd: number;
    offices: number;
    revenue_split: RevenueSplit;
    risk_description: string;
    returns: string;
}

export type InvestmentProperty = ResidentialProperty | IndustrialProperty;

export const properties: InvestmentProperty[] = [
    {
        img: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BtIQWRXyVX_Bw3bTi2ZdKc1I7VDoowU2UA&s'],
        id: "residential-001",
        name: "إقامة الأمل - شراڤة",
        type: "عقار سكني",
        location: "شراڤة",
        min_investment_dzd: 100000,
        total_cost_dzd: 18000000000,
        contributions: {
            in_kind: 4000000000,
            developer: 6000000000,
            public: 8000000000
        },
        structure: {
            units: 18,
            unit_price_dzd: 3500000000,
            floors: 5
        },
        parking: {
            spaces: 20,
            space_price_dzd: 8000000
        },
        risk_percent: 10,
        returns: "نسبة من الأرباح حسب المساهمة"
    },
    {
        img: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSin06w7FKURifHWu_wwB7_hLadU7I_h2_lIw&s'],
        id: "industrial-001",
        name: "GarageTech - الجزائر",
        type: "عقار صناعي",
        location: "الجزائر",
        min_investment_dzd: 100000,
        total_cost_dzd: 2000000000,
        "garage_cost_dzd": 1800000000,
        "renovation_dzd": 200000000,
        "offices": 16,
        "revenue_split": {
            "imb": 35,
            "startup": 65
        },
        "risk_description": "العقار يحافظ على قيمته",
        returns: "أرباح مرتفعة مع تقليل التكاليف"
    },
    {
        img: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBHnyp615OtuevEktTvhXhRRw79xV_-W64w&s'],
        id: "residential-002",
        name: "إقامة النسيم - بئر خادم",
        type: "عقار سكني",
        location: "بئر خادم",
        min_investment_dzd: 100000,
        total_cost_dzd: 15000000000,
        contributions: {
            in_kind: 3000000000,
            developer: 5000000000,
            public: 7000000000
        },
        structure: {
            units: 15,
            unit_price_dzd: 3200000000,
            floors: 4
        },
        parking: {
            spaces: 15,
            space_price_dzd: 7500000
        },
        risk_percent: 12,
        returns: "تقاسم الأرباح حسب المساهمة"
    },
    {
        img: ['https://mlsvani.com/wp-content/uploads/2022/03/Real-Estate.jpg'],
        id: "industrial-002",
        name: "TechHub - سطيف",
        type: "عقار صناعي",
        location: "سطيف",
        min_investment_dzd: 100000,
        total_cost_dzd: 2100000000,
        "garage_cost_dzd": 1900000000,
        "renovation_dzd": 200000000,
        "offices": 18,
        "revenue_split": {
            "imb": 35,
            "startup": 65
        },
        "risk_description": "عوائد عالية والمخاطر منخفضة",
        returns: "دعم المؤسسات الناشئة مقابل أرباح شهرية"
    },
    {
        img: ['https://mlsvani.com/wp-content/uploads/2022/03/Real-Estate.jpg'],
        id: "residential-003",
        name: "مجمع الصفاء - وهران",
        type: "عقار سكني",
        location: "وهران",
        min_investment_dzd: 100000,
        total_cost_dzd: 19000000000,
        contributions: {
            in_kind: 5000000000,
            developer: 6000000000,
            public: 8000000000
        },
        structure: {
            units: 20,
            unit_price_dzd: 3000000000,
            floors: 6
        },
        parking: {
            spaces: 25,
            space_price_dzd: 8500000
        },
        risk_percent: 9,
        returns: "توزيع أرباح سنوي"
    },
    {
        img: ['https://etimg.etb2bimg.com/photo/82709573.cms'],
        id: "industrial-003",
        name: "مركز أعمال تبسة",
        type: "عقار صناعي",
        location: "تبسة",
        min_investment_dzd: 100000,
        total_cost_dzd: 2200000000,
        "garage_cost_dzd": 2000000000,
        "renovation_dzd": 200000000,
        "offices": 20,
        "revenue_split": {
            "imb": 35,
            "startup": 65
        },
        "risk_description": "العقار مضمون",
        returns: "إيجار شهري ثابت + أرباح من شركات ناشئة"
    },
    {
        img: ['https://i0.wp.com/entrepreneurs.ng/wp-content/uploads/2025/01/Aminat-Article-Images42.jpg?fit=800%2C450&ssl=1'],
        id: "residential-004",
        name: "مشروع الضياء - عنابة",
        type: "عقار سكني",
        location: "عنابة",
        min_investment_dzd: 100000,
        total_cost_dzd: 17000000000,
        contributions: {
            in_kind: 3000000000,
            developer: 7000000000,
            public: 7000000000
        },
        structure: {
            units: 16,
            unit_price_dzd: 3400000000,
            floors: 5
        },
        parking: {
            spaces: 18,
            space_price_dzd: 8000000
        },
        risk_percent: 11,
        returns: "أرباح نصف سنوية حسب الحصة"
    },
    {
        img: ['https://i0.wp.com/entrepreneurs.ng/wp-content/uploads/2025/01/Aminat-Article-Images42.jpg?fit=800%2C450&ssl=1'],

        id: "industrial-004",
        name: "Digital Garage - باتنة",
        type: "عقار صناعي",
        location: "باتنة",
        min_investment_dzd: 100000,
        total_cost_dzd: 2300000000,
        "garage_cost_dzd": 2100000000,
        "renovation_dzd": 200000000,
        "offices": 22,
        "revenue_split": {
            "imb": 35,
            "startup": 65
        },
        "risk_description": "مخاطر محدودة",
        returns: "توزيع أرباح على أساس عقود شراكة"
    },
    {
        img: ['https://i0.wp.com/entrepreneurs.ng/wp-content/uploads/2025/01/Aminat-Article-Images42.jpg?fit=800%2C450&ssl=1'],
        id: "residential-005",
        name: "حي البدر - بجاية",
        type: "عقار سكني",
        location: "بجاية",
        min_investment_dzd: 100000,
        total_cost_dzd: 16000000000,
        contributions: {
            in_kind: 4000000000,
            developer: 6000000000,
            public: 6000000000
        },
        structure: {
            units: 17,
            unit_price_dzd: 3300000000,
            floors: 4
        },
        parking: {
            spaces: 17,
            space_price_dzd: 7500000
        },
        risk_percent: 10,
        returns: "تقاسم أرباح + تقييم سنوي"
    },
    {
        img: ['https://i0.wp.com/entrepreneurs.ng/wp-content/uploads/2025/01/Aminat-Article-Images42.jpg?fit=800%2C450&ssl=1'],

        "id": "industrial-005",
        name: "مركز تطوير المؤسسات - البليدة",
        type: "عقار صناعي",
        location: "البليدة",
        min_investment_dzd: 100000,
        total_cost_dzd: 2400000000,
        "garage_cost_dzd": 2200000000,
        "renovation_dzd": 200000000,
        "offices": 24,
        "revenue_split": {
            "imb": 35,
            "startup": 65
        },
        "risk_description": "عقار استثماري آمن",
        returns: "إيجار + شراكة فعلية في الربح"
    }
];