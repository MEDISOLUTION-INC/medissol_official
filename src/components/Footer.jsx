import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const [terminalInput, setTerminalInput] = useState('');
    const [terminalOutput, setTerminalOutput] = useState(['> System Ready. Type "help" for commands.']);
    const outputRef = useRef(null);

    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [terminalOutput]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = terminalInput.trim().toLowerCase();
            let response = '';

            switch (cmd) {
                case 'help':
                    response = 'Available commands: about, vision, contact, clear';
                    break;
                case 'about':
                    response = 'Medissol: Architecting the future of healthcare.';
                    break;
                case 'vision':
                    response = 'We build dedicated IT solutions for hospitals.';
                    break;
                case 'contact':
                    response = 'Signal us at: 1899-3342, medilove1004@medissollab.com';
                    break;
                case 'clear':
                    setTerminalOutput(['> Console cleared.']);
                    setTerminalInput('');
                    return;
                default:
                    response = `Command not found: ${cmd}. Try "help".`;
            }

            setTerminalOutput(prev => [...prev.slice(-4), `> ${cmd}`, response]);
            setTerminalInput('');
        }
    };

    return (
        <footer className="border-t border-white/5 bg-primary-dark pt-16 pb-8 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
                {/* Brand */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-3xl font-black text-white tracking-tight">메디쏠</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_#00E5A0]"></span>
                    </div>
                    <p className="text-text-secondary text-base font-light leading-relaxed">
                        디지털 전환과 의료의 혁신,<br />
                        그 이상의 가치.<br />
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-bold text-white mb-6 font-outfit uppercase tracking-widest text-sm text-accent">Menu</h4>
                    <ul className="space-y-4 text-base text-text-secondary font-light">
                        {['About', 'Solutions', 'Features', 'Contact'].map(item => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-accent transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Address */}
                <div>
                    <h4 className="font-bold text-white mb-6 font-outfit uppercase tracking-widest text-sm text-accent">Contact</h4>
                    <address className="not-italic text-sm text-text-secondary space-y-4 font-light leading-relaxed">
                        <p>서울특별시 송파구 법원로11길 7,<br />현대지식산업센터 C동 909호</p>
                        <p>medilove1004@medissollab.com</p>
                        <p>사업자 번호 : 797-88-01455</p>
                    </address>
                </div>

                {/* Social/Resources */}
                <div>
                    <h4 className="font-bold text-white mb-6 font-outfit uppercase tracking-widest text-sm text-accent">Connect</h4>
                    <ul className="space-y-4 text-sm text-text-secondary font-light">
                        <li>
                            <a 
                                href="https://blog.naver.com/medisolution1004" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-accent transition-colors flex items-center gap-2 group"
                            >
                                <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="group-hover:translate-x-1 transition-transform">공식 블로그</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Fun Terminal */}
                <div className="lg:col-span-1">
                    <h4 className="font-bold text-white mb-6 flex items-center gap-2 font-outfit uppercase tracking-widest text-sm text-accent">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        System Access
                    </h4>
                    <div className="bg-primary-surface border border-white/5 rounded-2xl p-4 font-mono text-xs h-40 flex flex-col shadow-inner backdrop-blur-sm">
                        <div
                            ref={outputRef}
                            className="flex-1 overflow-y-auto mb-2 text-accent/80 space-y-1 scrollbar-hide"
                        >
                            {terminalOutput.map((line, i) => (
                                <div key={i}>{line}</div>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 text-white/50 border-t border-white/5 pt-2">
                            <span className="text-accent">{'>'}</span>
                            <input
                                type="text"
                                value={terminalInput}
                                onChange={(e) => setTerminalInput(e.target.value)}
                                onKeyDown={handleCommand}
                                className="bg-transparent border-none outline-none text-white w-full placeholder-white/20"
                                placeholder="'help'를 입력하세요..."
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto border-t border-white/5 mt-16 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-text-secondary font-outfit tracking-wide">
                <p>&copy; 2026 Medissol. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
