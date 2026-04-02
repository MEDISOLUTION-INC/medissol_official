import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
    return (
        <section id="vision" className="h-full w-full flex flex-col justify-center px-6 md:px-20 overflow-hidden relative">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-medisol-blue/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-1 bg-medisol-blue rounded-full" />
                        <span className="text-medisol-blue font-semibold tracking-widest uppercase">메디쏠의 비전</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                        단순한 앱을 넘어, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            디지털 헬스케어 생태계를 설계합니다.
                        </span>
                    </h2>
                    <p className="text-medisol-gray text-lg leading-relaxed mb-8">
                        수많은 앱이 사라지는 시대, 메디쏠은 지속 가능하고 가치 있는 의료 플랫폼을 지향합니다.
                        우리는 검증된 데이터와 끊임없는 혁신을 통해 병원과 환자를 가장 효율적으로 연결하며,
                        단순한 기능 구현을 넘어 병원 경영의 성장을 견인하는 엔진을 만듭니다.
                    </p>

                    <div className="flex gap-8 border-t border-white/10 pt-8">
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-1">26만+</h4>
                            <p className="text-sm text-medisol-gray">전체 회원수</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-1">1.3억+</h4>
                            <p className="text-sm text-medisol-gray">누적 예약 건수</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6">핵심 철학 (Core Philosophy)</h3>
                        <ul className="space-y-6">
                            {[
                                { title: "환자 중심의 경험", desc: "기술보다 사람이 먼저입니다. 환자의 편리함을 최우선으로 생각합니다." },
                                { title: "병원 경영 효율화", desc: "데이터 연동과 자동화를 통해 병원 업무의 생산성을 극대화합니다." },
                                { title: "끊임없는 혁신", desc: "현실에 안주하지 않고 디지털 헬스케어의 미래를 선도합니다." }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-start group">
                                    <div className="w-8 h-8 rounded-full bg-medisol-blue/20 flex items-center justify-center flex-shrink-0 group-hover:bg-medisol-blue transition-colors">
                                        <div className="w-2 h-2 bg-medisol-blue rounded-full group-hover:bg-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white group-hover:text-medisol-blue transition-colors">{item.title}</h4>
                                        <p className="text-sm text-medisol-gray">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-medisol-blue/20 rounded-full blur-2xl" />
                </motion.div>
            </div>
        </section>
    );
};

export default Vision;
