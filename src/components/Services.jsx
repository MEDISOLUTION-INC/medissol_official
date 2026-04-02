import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: "비대면(화상) 진료",
            desc: "시간과 장소의 제약 없이 의사와 환자를 연결하는 원격 화상 진료 시스템입니다.",
            tags: ["Telemedicine", "Video Call", "Remote Care"]
        },
        {
            title: "실시간 진료예약",
            desc: "복잡한 전화 예약 없이 앱으로 간편하게 실시간 진료 일정을 확인하고 예약합니다.",
            tags: ["Real-time Booking", "Scheduler", "Convenience"]
        },
        {
            title: "문진표 사전작성",
            desc: "대기 시간을 줄이고 진료 정확도를 높이는 모바일 사전 문진 서비스입니다.",
            tags: ["Digital Form", "Pre-check", "Efficiency"]
        },
        {
            title: "모바일 처방전",
            desc: "종이 처방전 없이 약국으로 바로 전송하거나 보관할 수 있는 전자 처방전입니다.",
            tags: ["E-Prescription", "Paperless", "Secure"]
        },
        {
            title: "검사결과 보기",
            desc: "내원하지 않아도 집에서 안전하고 편리하게 검사 결과를 확인할 수 있습니다.",
            tags: ["Test Results", "Privacy", "Access"]
        },
        {
            title: "모바일 결제",
            desc: "진료 후 수납 창구 대기 없이 모바일로 간편하게 진료비를 결제합니다.",
            tags: ["Mobile Payment", "Fintech", "Fast"]
        },
        {
            title: "진료대기 순번",
            desc: "병원 내 대기실 혼잡을 피하고 내 순서를 실시간으로 확인할 수 있습니다.",
            tags: ["Queue System", "Real-time", "Alert"]
        },
        {
            title: "PUSH 알림",
            desc: "예약 시간, 복약 알림 등 중요한 의료 정보를 놓치지 않도록 알려드립니다.",
            tags: ["Notification", "Reminder", "Engagement"]
        }
    ];

    return (
        <section id="services" className="h-full w-full flex flex-col justify-center px-6 md:px-20 bg-medisol-navy relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-4"
                        >
                            주요 서비스 기능
                        </motion.h2>
                        <div className="w-24 h-1.5 bg-medisol-blue rounded-full" />
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-medisol-blue hover:from-white/10 transition-all duration-300 relative overflow-hidden h-full flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-medisol-blue transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                                    {service.desc}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                                {service.tags.map(tag => (
                                    <span key={tag} className="px-1.5 py-0.5 text-[10px] font-medium text-medisol-blue bg-medisol-blue/10 rounded-full border border-medisol-blue/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
