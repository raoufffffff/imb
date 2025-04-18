import React from "react";

interface Project {
    id: string;
    name: string;
    type: string;
    location: string;
    min_investment_dzd: number;
    total_cost_dzd: number;
    returns: string;
    risk_percent?: number;
    img: string[]; // 👈 أضفنا خاصية الصورة
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="bg-white my-3 w-10/12 md:w-4/12 min-h-[440px] max-h[440px] rounded-2xl shadow-md  max-w-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            {/* صورة المشروع */}

            <img
                src={project.img[0]}
                alt={project.name}
                className="w-full h-48 object-cover"
            />

            {/* محتوى الكارت */}
            <div className="p-5">
                <div className="mb-3">
                    <span className="text-sm text-white bg-[#0a5da6] px-3 py-1 rounded-full">
                        {project.type}
                    </span>
                </div>
                <h2 className="text-xl font-semibold text-[#0a5da6] mb-2">{project.name}</h2>
                <p className="text-gray-600 mb-1">📍 <strong>الموقع:</strong> {project.location}</p>
                <p className="text-gray-600 mb-1">💰 <strong>الحد الأدنى:</strong> {project.min_investment_dzd.toLocaleString()} دج</p>
                <p className="text-gray-600 mb-1">🏗️ <strong>تكلفة المشروع:</strong> {project.total_cost_dzd.toLocaleString()} دج</p>
                <p className="text-gray-600 mb-1">📈 <strong>العائد:</strong> {project.returns}</p>
                {project.risk_percent && (
                    <p className="text-gray-600">⚠️ <strong>نسبة المخاطر:</strong> {project.risk_percent}%</p>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
