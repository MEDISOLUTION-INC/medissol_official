import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const hospitals = [
  '시엘병원', '리오라여성의원', '미래와희망산부인과', '서울라헬여성의원',
  '서울미즈병원', '서울비커밍여성의원', '베스트오브미여성의원', '서울퍼틸리티여성의원',
  '연세아이봄여성의원', '아이새움소아과', '행복한어린이병원', '인천연세소아청소년과',
  '삼성웰니스의원', '대전 서울아산이비인후과', '광명 서울아산이비인후과', '보아스이비인후과',
  '벗이비인후과', 'CM병원', 'CM병원글로벌', 'EM365'
];

export default function Portfolio() {
  const marqueeRef = useRef(null);

  const half = Math.ceil(hospitals.length / 2);
  const row1 = hospitals.slice(0, half);
  const row2 = hospitals.slice(half);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.marquee-content-1', {
        xPercent: -50,
        repeat: -1,
        duration: 150, // 매우 천천히 (기존 80 -> 150)
        ease: 'linear'
      });
      gsap.fromTo('.marquee-content-2',
        { xPercent: -50 },
        {
          xPercent: 0,
          repeat: -1,
          duration: 150, // 매우 천천히 오른쪽으로
          ease: 'linear'
        }
      );
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" className="py-32 bg-primary-dark overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-20 md:mb-32">
        <p className="text-accent font-semibold tracking-widest uppercase mb-4 inline-block">
          Portfolio
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          전국의 병원들이 <br className="hidden md:block" />
          메디쏠과 함께 디지털 전환을 경험하고 있습니다
        </h2>
      </div>

      <div ref={marqueeRef} className="w-full relative flex flex-col gap-6 mb-20 mask-marquee">
        {/* Row 1 */}
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

        {/* Row 2 */}
        <div className="flex whitespace-nowrap marquee-content-2 gap-6 w-max">
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
    </section>
  );
}
