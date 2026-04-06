import React from 'react';

export default function FloatingMedilove() {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-end gap-3 md:gap-4 drop-shadow-2xl">
      {/* Naver Blog Button */}
      <a
        href="https://blog.naver.com/medisolution1004"
        target="_blank"
        rel="noopener noreferrer"
        className="group/float-blog relative flex items-center gap-3 pl-4 pr-5 py-2.5 md:py-3 md:pl-5 md:pr-6 rounded-full bg-primary-dark/80 backdrop-blur-xl border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:bg-white/10 hover:border-white/40 transition-all duration-300"
      >
        <div className="relative flex h-2.5 w-2.5">
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white/70 border-[1.5px] border-primary-dark group-hover/float-blog:bg-white transition-colors duration-300"></span>
        </div>
        <span className="text-sm border-white font-extrabold text-white/80 tracking-wide z-10 w-max group-hover/float-blog:text-white transition-colors duration-300">
          공식 블로그
        </span>
      </a>

      {/* Medilove Button */}
      <a
        href="https://api.mediloving.co.kr/rb/index.php"
        target="_blank"
        rel="noopener noreferrer"
        className="group/float relative flex items-center gap-3 pl-4 pr-5 py-3 md:py-3.5 md:pl-5 md:pr-6 rounded-full bg-primary-dark/80 backdrop-blur-xl border border-accent/40 shadow-[0_0_20px_rgba(0,229,160,0.15)] hover:shadow-[0_0_30px_rgba(0,229,160,0.35)] hover:bg-accent/10 hover:border-accent transition-all duration-300"
      >
        <div className="absolute inset-0 rounded-full bg-accent/5 animate-pulse pointer-events-none"></div>
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent border-[2px] border-primary-dark"></span>
        </span>
        <span className="text-sm md:text-base font-extrabold text-white tracking-wide z-10 w-max group-hover/float:text-accent transition-colors duration-300">
          메디러브 접속
        </span>
      </a>
    </div>
  );
}
