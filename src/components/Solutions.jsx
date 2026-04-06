import { useRef, useEffect } from 'react';
// verified auto-deploy
import gsap from 'gsap';

// Hospital Logos
import gamjanun from '../assets/hospital_logo/감자와눈사람여성의원.png';
import rahel from '../assets/hospital_logo/서울라헬여성의원.png';
import liora from '../assets/hospital_logo/리오라여성의원.png';
import miraeyeon from '../assets/hospital_logo/미래연여성의원.png';
import beomi from '../assets/hospital_logo/베스트오브미여성의원.png';
import becoming from '../assets/hospital_logo/서울비커밍여성의원.png';
import sarangai from '../assets/hospital_logo/사랑아이여성의원.png';
import seoyanai from '../assets/hospital_logo/서연아이여성의원.png';
import seoulmiz from '../assets/hospital_logo/서울미즈병원 로고.png';
import sehwa from '../assets/hospital_logo/세화병원.png';
import sonoa from '../assets/hospital_logo/소노아여성의원.png';
import ciel from '../assets/hospital_logo/시엘병원.png';
import iora from '../assets/hospital_logo/아이오라여성의원.png';
import ellemedi from '../assets/hospital_logo/엘르메디여성의원.png';
import yonseiibom from '../assets/hospital_logo/연세아이봄여성의원.png';
import choesang from '../assets/hospital_logo/최상산부인과의원.png';

// SocDoc Logo
import socdoc from '../assets/socdoc_logo/속닥.png';

export default function Solutions() {
  const containerRef = useRef(null);

  const sections = [
    {
      title: '난임 병원 앱',
      subtitle: '소중한 여정의 모든 순간을, 앱 하나로',
      features: ['시술 현황', '투약 스케줄', '배아앨범', '동결배아 만료 푸시알림', '동의서 전자서명', '증빙서류 발급'],
      logos: [
        { name: '감자와눈사람여성의원', logo: gamjanun },
        { name: '서울라헬여성의원', logo: rahel },
        { name: '리오라여성의원', logo: liora },
        { name: '미래연여성의원', logo: miraeyeon },
        { name: '베스트오브미여성의원', logo: beomi },
        { name: '서울비커밍여성의원', logo: becoming },
        { name: '사랑아이여성의원', logo: sarangai },
        { name: '서연아이여성의원', logo: seoyanai },
        { name: '서울미즈병원', logo: seoulmiz },
        { name: '세화병원', logo: sehwa },
        { name: '소노아여성의원', logo: sonoa },
        { name: '시엘병원', logo: ciel },
        { name: '아이오라여성의원', logo: iora },
        { name: '엘르메디여성의원', logo: ellemedi },
        { name: '연세아이봄여성의원', logo: yonseiibom },
        { name: '최상산부인과의원', logo: choesang },
        { name: '서울아이앤', logo: null },
        { name: '서울퍼틸리티여성의원', logo: null }
      ],
      type: 'grid'
    },
    {
      title: '속닥속닥 플랫폼',
      subtitle: '전국 아동병원이 선택한 EMR 연동 실시간 예약 서비스',
      features: ['병원예약', '비대면 진료'],
      logos: [{ name: '속닥속닥', logo: socdoc }],
      type: 'featured'
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Improved Marquee with Center-Zoom (1.5x)
      const marquee = document.querySelector('.sol-marquee-content');
      const logos = marquee?.querySelectorAll('.sol-logo-item-wrapper');

      if (marquee && logos) {
        const totalWidth = marquee.scrollWidth / 2;
        const containerWidth = marquee.parentElement.offsetWidth;
        const centerX = containerWidth / 2;

        // Prepare logo data with currentScale for Lerping
        const data = Array.from(logos).map(logo => ({
          el: logo,
          baseX: logo.offsetLeft + logo.offsetWidth / 2,
          currentScale: 1,
          setter: gsap.quickSetter(logo, 'scale')
        }));

        gsap.set(logos, { willChange: 'transform', transformOrigin: 'center center' });

        const tl = gsap.to(marquee, {
          x: -totalWidth,
          duration: 60,
          ease: 'none',
          repeat: -1,
          onUpdate: function () {
            const marqueeX = gsap.getProperty(marquee, 'x');

            data.forEach(item => {
              let currentCenter = item.baseX + marqueeX;

              // Handle infinite loop logic for world position
              if (currentCenter < -totalWidth / 4) currentCenter += totalWidth;
              if (currentCenter > totalWidth * 1.25) currentCenter -= totalWidth;

              const dist = Math.abs(centerX - currentCenter);
              const maxDist = containerWidth * 0.7;

              let targetScale = 1;
              if (dist < maxDist) {
                const norm = 1 - (dist / maxDist);
                // Ultra-smooth sine bell curve
                const eased = Math.pow(Math.sin(norm * Math.PI / 2), 2);
                targetScale = 1 + (0.5 * eased);
              }

              // Apply Lerp for 'buttery smooth' transition (0.1 = 10% towards target per frame)
              item.currentScale += (targetScale - item.currentScale) * 0.15;
              item.setter(item.currentScale);
            });
          }
        });
      }

      // Floating animation for featured logo
      gsap.to('.sol-featured-logo', {
        y: 'random(-8, 8)',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Mouse Interactivity (Magnetic) for featured logo only
      const moveHandler = (e) => {
        const { clientX, clientY } = e;
        const featured = document.querySelector('.sol-featured-logo-container');
        if (featured) {
          const rect = featured.getBoundingClientRect();
          const dx = clientX - (rect.left + rect.width / 2);
          const dy = clientY - (rect.top + rect.height / 2);
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 300) {
            gsap.to('.sol-featured-logo', {
              x: dx / 15, // Slightly heavier feel
              y: dy / 15,
              duration: 1.5, // Much slower response
              ease: 'power2.out'
            });
          } else {
            gsap.to('.sol-featured-logo', {
              x: 0,
              y: 0,
              duration: 1.8, // Slower return
              ease: 'power2.out'
            });
          }
        }
      };

      window.addEventListener('mousemove', moveHandler);
      return () => window.removeEventListener('mousemove', moveHandler);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="solutions" className="py-24 md:py-32 px-6 md:px-12 bg-primary-surface border-t border-b border-white/5 overflow-hidden" ref={containerRef}>
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-24 section-reveal">
          <p className="text-accent font-semibold tracking-widest uppercase mb-4 inline-block">
            Solutions
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-center">
            모든 병원이 같을 수 없으니까, <br className="hidden md:block" />
            <span className="text-text-secondary">모든 솔루션도 같을 수 없습니다</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col items-center p-8 md:p-12 min-h-[450px]">
              {/* Header Info */}
              <div className="mb-16 text-center w-full">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                  {section.title}
                </h3>
                <p className="text-base md:text-lg text-text-secondary font-light mb-10 leading-relaxed line-clamp-1">
                  {section.subtitle}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {section.features.map((feat, i) => (
                    <span
                      key={i}
                      className="group/feat px-4 py-2 bg-white/[0.03] border border-white/10 rounded-2xl text-[11px] md:text-sm font-semibold text-white/70 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 flex items-center gap-2 cursor-default shadow-sm hover:shadow-accent/10"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover/feat:bg-accent group-hover/feat:scale-125 transition-all" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Logo Showcase Area - Fully Transparent */}
              <div className="flex-1 flex items-center justify-center relative overflow-hidden w-full">
                {section.type === 'grid' ? (
                  <div className="w-full relative py-20 overflow-visible">
                    {/* Subtle Gradient Masks */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary-surface to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary-surface to-transparent z-20 pointer-events-none"></div>

                    <div className="flex whitespace-nowrap sol-marquee-content gap-12 md:gap-20 items-center">
                      {/* Double the logos for marquee */}
                      {[...section.logos, ...section.logos].map((item, i) => (
                        <div
                          key={i}
                          className="sol-logo-item-wrapper flex-shrink-0 flex flex-col items-center justify-center gap-4 transition-all duration-300"
                        >
                          <div className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] flex items-center justify-center">
                            {item.logo ? (
                              <img
                                src={item.logo}
                                alt={item.name}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <div className="w-[70%] h-[70%] bg-white/5 border border-white/10 rounded-[22.5%] flex items-center justify-center text-white/20 text-xs md:text-sm font-bold text-center px-2">
                                {item.name.substring(0, 2)}
                              </div>
                            )}
                          </div>
                          <p className="text-[10px] md:text-xs font-medium text-white/40 tracking-tight text-center max-w-[120px] line-clamp-1">
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex items-center justify-center sol-featured-logo-container py-12">
                    <div className="sol-featured-logo relative group/soc flex flex-col items-center gap-8">
                      <div className="absolute inset-[-40px] bg-accent/5 rounded-full blur-[60px] animate-pulse opacity-20"></div>
                      <div className="relative z-10 w-[160px] h-[160px] md:w-[240px] md:h-[240px] flex items-center justify-center">
                        <img
                          src={section.logos[0].logo}
                          alt={section.logos[0].name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-xl md:text-2xl font-bold text-white/60 tracking-wider">
                        {section.logos[0].name}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



