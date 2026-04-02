import React from 'react';
import { motion } from 'framer-motion';

const Insights = () => {
    const insights = [
        {
            category: "Tech Trend",
            title: "Why Agents are the next evolution of AI",
            date: "Feb 08, 2026",
            summary: "Moving beyond chatbots to autonomous systems that perform actions."
        },
        {
            category: "Methodology",
            title: "The death of the traditional MVP",
            date: "Jan 15, 2026",
            summary: "Why 'Minimum Viable Product' is evolving into 'Minimum Lovable Product'."
        },
        {
            category: "Case Study",
            title: "Scaling Fintech: A 300% Growth Story",
            date: "Dec 22, 2025",
            summary: "How we refactored legacy code to handle millions of transactions."
        }
    ];

    return (
        <section id="insights" className="h-full w-full flex flex-col justify-center px-6 md:px-20 bg-[#001830]">
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Medissol Insights
                    </motion.h2>
                    <p className="text-medisol-gray text-lg max-w-2xl">
                        Thoughts, strategies, and technical deep dives from our engineering team.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {insights.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="flex flex-col"
                        >
                            <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl relative overflow-hidden group cursor-pointer">
                                <div className="absolute inset-0 bg-medisol-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-xs font-bold text-white rounded uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                            <div className="bg-white/5 border border-t-0 border-white/10 p-6 rounded-b-2xl hover:border-medisol-blue/50 transition-colors flex-1">
                                <div className="text-medisol-blue text-xs font-mono mb-2">{item.date}</div>
                                <h3 className="text-lg font-bold text-white mb-3 hover:text-medisol-blue transition-colors cursor-pointer">
                                    {item.title}
                                </h3>
                                <p className="text-medisol-gray text-sm line-clamp-2">
                                    {item.summary}
                                </p>
                                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                                    <span className="text-xs font-bold text-white cursor-pointer hover:underline">READ MORE</span>
                                    <svg className="w-4 h-4 text-medisol-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Insights;
