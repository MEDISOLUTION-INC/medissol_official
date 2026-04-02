import React from 'react';
import { motion } from 'framer-motion';

const Methodology = () => {
    const steps = [
        {
            id: '01',
            title: '가설 수립 (Hypothesize)',
            desc: '비즈니스 모델에서 가장 위험하고 중요한 가설을 식별하여 검증 목표를 설정합니다.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            id: '02',
            title: 'MVP 개발 (Build)',
            desc: '핵심 가치를 검증할 수 있는 최소 기능 제품(MVP)을 신속하게 개발하여 시장에 출시합니다.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            id: '03',
            title: '측정 (Measure)',
            desc: '실제 사용자 데이터를 수집하고 분석하여 서비스의 성과와 문제점을 객관적으로 파악합니다.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            id: '04',
            title: '학습 및 피봇 (Learn & Pivot)',
            desc: '데이터 기반의 의사결정을 통해 제품을 고도화하거나 전략을 수정하여 성공 확률을 높입니다.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            )
        }
    ];

    return (
        <section id="methodology" className="h-full w-full flex flex-col justify-center px-6 md:px-20 bg-[#021223] relative">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        메디쏠의 개발 방법론
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-medisol-gray text-xl max-w-2xl mx-auto"
                    >
                        린 스타트업(Lean Startup) 방법론을 통해 성공적인 디지털 제품을 만듭니다.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-medisol-blue/50 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative group "
                            >
                                {/* Step Marker */}
                                <div className="w-12 h-12 md:w-32 md:h-32 mx-auto md:mb-8 relative flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-[#021223] border-2 border-medisol-blue flex items-center justify-center relative z-10 group-hover:bg-medisol-blue group-hover:text-white transition-all duration-300">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="p-6 border border-white/5 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-colors text-center h-full">
                                    <span className="text-4xl font-black text-white/5 absolute top-4 right-4">{step.id}</span>
                                    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-medisol-blue transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-medisol-gray text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
