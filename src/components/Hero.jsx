import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';

const hospitals = [
  '시엘병원', '리오라여성의원', '미래와희망산부인과', '서울라헬여성의원',
  '서울미즈병원', '서울비커밍여성의원', '베스트오브미여성의원', '서울퍼틸리티여성의원',
  '연세아이봄여성의원', '아이새움소아과', '행복한어린이병원', '인천연세소아청소년과',
  '삼성웰니스의원', '대전 서울아산이비인후과', '광명 서울아산이비인후과', '보아스이비인후과',
  '벗이비인후과', 'CM병원', 'CM병원글로벌', 'EM365'
];

export default function Hero() {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const spotlightRef = useRef(null);
  const [nodes, setNodes] = useState([]);

  const half = Math.ceil(hospitals.length / 2);
  const row1 = hospitals.slice(0, half);
  const row2 = hospitals.slice(half);

  useEffect(() => {
    // Generate random nodes for the tech background
    const nodeCount = 15;
    const newNodes = Array.from({ length: nodeCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.4 + 0.1,
      duration: Math.random() * 10 + 10
    }));
    setNodes(newNodes);

    let ctx = gsap.context(() => {
      // Intro animation
      gsap.fromTo('.hero-text',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out' }
      );

      // Marquee animations
      gsap.to('.marquee-content-1', {
        xPercent: -50,
        repeat: -1,
        duration: 150,
        ease: 'linear'
      });
      gsap.fromTo('.marquee-content-2',
        { xPercent: -50 },
        {
          xPercent: 0,
          repeat: -1,
          duration: 150,
          ease: 'linear'
        }
      );

      // Tech Grid forward motion
      gsap.to('.tech-grid-svg', {
        backgroundPosition: '0 100%',
        duration: 15,
        repeat: -1,
        ease: 'none'
      });

      // Floating nodes continuous animation
      gsap.to('.tech-node', {
        y: '+=50',
        x: '+=30',
        duration: (i) => 10 + i * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Mouse Interactivity
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 40;
        const yPos = (clientY / window.innerHeight - 0.5) * 40;

        // Grid Parallax
        gsap.to(gridRef.current, {
          x: xPos * 0.5,
          y: yPos * 0.5,
          rotateX: -yPos * 0.1,
          rotateY: xPos * 0.1,
          duration: 1,
          ease: 'power2.out'
        });

        // Spotlight
        gsap.to(spotlightRef.current, {
          left: clientX,
          top: clientY,
          duration: 0.5,
          ease: 'power2.out'
        });

        // Nodes slight reaction
        gsap.to('.tech-node', {
          x: (i) => (clientX / window.innerWidth - 0.5) * (10 + i * 2),
          y: (i) => (clientY / window.innerHeight - 0.5) * (10 + i * 2),
          duration: 1.5,
          ease: 'power3.out'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-between bg-primary-dark overflow-hidden snap-start pt-20 pb-10 md:pt-32 md:pb-16 perspective-1000"
    >
      {/* --- Tech Background Layer --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Tech Grid */}
        <div 
          ref={gridRef}
          className="tech-grid-svg absolute inset-x-[-10%] inset-y-[-10%] opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 229, 160, 0.1) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(0, 229, 160, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'perspective(1000px) rotateX(20deg)'
          }}
        ></div>

        {/* Cursor Spotlight Glow */}
        <div 
          ref={spotlightRef}
          className="absolute w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen"
          style={{ left: '-100%', top: '-100%' }}
        ></div>

        {/* Ambient Top Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent/15 rounded-full blur-[150px] animate-pulse"></div>

        {/* HUD Corner Brackets (Desktop only) */}
        <div className="hidden lg:block absolute top-[15%] left-[5%] w-24 h-24 border-t-2 border-l-2 border-accent/20 rounded-tl-3xl"></div>
        <div className="hidden lg:block absolute top-[15%] right-[5%] w-24 h-24 border-t-2 border-r-2 border-accent/20 rounded-tr-3xl"></div>
        <div className="hidden lg:block absolute bottom-[35%] left-[5%] w-24 h-24 border-b-2 border-l-2 border-accent/20 rounded-bl-3xl"></div>
        <div className="hidden lg:block absolute bottom-[35%] right-[5%] w-24 h-24 border-b-2 border-r-2 border-accent/20 rounded-br-3xl"></div>

        {/* HUD Scanning Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent shadow-[0_0_15px_rgba(0,229,160,0.5)] animate-scan"></div>

        {/* Floating Data Nodes */}
        {nodes.map((node) => (
          <div
            key={node.id}
            className="tech-node absolute bg-accent rounded-full blur-[1px]"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              opacity: node.opacity,
              boxShadow: `0 0 10px rgba(0, 229, 160, 0.8)`
            }}
          ></div>
        ))}
      </div>
      {/* --- End Tech Background --- */}

      <div className="flex flex-col items-center w-full z-10 flex-1 justify-center mt-10 md:mt-0">
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-16 md:mb-24 flex flex-col items-center">

          {/* Pulsing Status Badge */}
          <div className="hero-text inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(0,229,160,0.1)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-accent text-[0.8rem] font-bold tracking-[0.25em] uppercase">다양한 EMR 연동 레퍼런스 보유 </span>
          </div>

          {/* Super Premium Typography */}
          <h1 className="flex flex-col items-center gap-6 mt-2">
            <span className="hero-text text-7xl sm:text-8xl md:text-[9rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-2xl">
              메디쏠
            </span>
            <span className="hero-text text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-white/90 drop-shadow-md">
              전국의 병원들과 <span className="text-white font-medium italic relative z-10">함께하고<span className="absolute bottom-1 left-0 w-full h-2 bg-accent/40 -z-10"></span></span> 있습니다
            </span>
          </h1>

          <p className="hero-text mt-8 px-4 text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            EMR 밀착 연동으로 병원의 업무환경을 개선합니다.<br className="hidden md:block" />
            신뢰할 수 있는 파트너, 메디쏠이 의료 시장의 새로운 기준을 제시합니다.
          </p>
        </div>

        <div ref={marqueeRef} className="w-full relative flex flex-col gap-6 mask-marquee py-8">
          <div className="flex whitespace-nowrap marquee-content-1 gap-6 w-max">
            {[...row1, ...row1, ...row1, ...row1].map((name, idx) => (
              <div key={`r1-${idx}`} className="portfolio-card-wrapper group cursor-default">
                <div className="portfolio-card px-8 py-6 min-w-[280px] flex items-center justify-center transition-colors">
                  <span className="text-xl font-bold font-sans tracking-tight text-white/50 group-hover:text-white transition-colors">
                    {name}
                  </span>
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex whitespace-nowrap marquee-content-2 gap-6 w-max md:mb-10">
            {[...row2, ...row2, ...row2, ...row2].map((name, idx) => (
              <div key={`r2-${idx}`} className="portfolio-card-wrapper group cursor-default">
                <div className="portfolio-card px-8 py-6 min-w-[280px] flex items-center justify-center transition-colors">
                  <span className="text-xl font-bold font-sans tracking-tight text-white/50 group-hover:text-white transition-colors">
                    {name}
                  </span>
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-text z-20 flex flex-col items-center gap-2 mt-0">
        <span className="text-xs uppercase tracking-widest text-text-secondary">Scroll to explore</span>
        <ArrowDown className="text-white animate-bounce mt-2" size={24} />
      </div>
    </section>
  );
}

