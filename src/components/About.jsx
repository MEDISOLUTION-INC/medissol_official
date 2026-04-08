import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Network, Stethoscope, Building2 } from 'lucide-react';

function CountUp({ end, suffix = "", duration = 2.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let obj = { val: 0 };
    let ctx = gsap.context(() => {
      gsap.to(obj, {
        val: end,
        duration: duration,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
        onUpdate: () => {
          setCount(Math.round(obj.val));
        }
      });
    }, ref);

    return () => ctx.revert();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function About() {
  const sectionRef = useRef(null);

  const numData = [
    { target: 21, suffix: ' ', label: '메이저 난임 병원 앱 운영' },
    { target: 103, suffix: '+', label: '총 제휴 병원' },
    { target: 40, suffix: '만', label: '앱 회원 수' },
    { target: 140, suffix: '만+', label: '누적 진료 예약' },
    { target: 8, suffix: '위', label: '앱스토어 의료 인기차트' },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-reveal',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="about" ref={sectionRef} className="pt-32 pb-48 md:pt-40 md:pb-64 px-6 md:px-12 bg-primary-dark">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left Text */}
          <div className="space-y-12">
            <p className="about-reveal text-accent font-semibold tracking-widest uppercase py-1 border-b border-accent/20 inline-block">
              About Us
            </p>
            <h2 className="about-reveal text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug">
              EMR 완전 연동으로, <br />
              <span className="text-text-secondary">업무를 더 빠르게</span>
            </h2>
            <div className="about-reveal text-xl md:text-2xl font-light text-text-secondary space-y-6 leading-relaxed">
              <p>
                메디쏠은 EMR 연동 기술을 기반으로<br className="hidden md:block" />
                병원 예약, 시술 동의서, 검사 결과, 환자 관리까지<br className="hidden md:block" />
                <strong className="text-white font-medium">병원에 딱 맞는 전용 앱</strong>을 만듭니다.
              </p>
              <p className="text-lg">
                고민은 개발 시간만 늦출 뿐,<br />
                우리 병원의 DX 시작하세요.
              </p>
            </div>
          </div>

          {/* Right Cards / Keywords */}
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
            <div className="about-reveal group bg-primary-surface border border-white/5 hover:border-accent/30 p-8 rounded-3xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,229,160,0.1)]">
              <div className="flex items-start gap-6">
                <div className="bg-primary-dark p-4 rounded-2xl group-hover:bg-accent/10 transition-colors">
                  <Network className="text-accent" size={36} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">EMR 완전 연동</h3>
                  <p className="text-text-secondary leading-relaxed">모든 EMR 시스템과 실시간 양방향으로 연동되어 업무 부담을 덜어줍니다.</p>
                </div>
              </div>
            </div>

            <div className="about-reveal group bg-primary-surface border border-white/5 hover:border-accent/30 p-8 rounded-3xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,229,160,0.1)]">
              <div className="flex items-start gap-6">
                <div className="bg-primary-dark p-4 rounded-2xl group-hover:bg-accent/10 transition-colors">
                  <Stethoscope className="text-accent" size={36} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">진료과별 특화 앱</h3>
                  <p className="text-text-secondary leading-relaxed">난임센터, 소아과, 이비인후과, 관절병원 등 각 진료과 특유의 워크플로우에 맞춤 설계합니다.</p>
                </div>
              </div>
            </div>

            <div className="about-reveal group bg-primary-surface border border-white/5 hover:border-accent/30 p-8 rounded-3xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,229,160,0.1)]">
              <div className="flex items-start gap-6">
                <div className="bg-primary-dark p-4 rounded-2xl group-hover:bg-accent/10 transition-colors">
                  <Building2 className="text-accent" size={36} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">다양한 의료기관 대응</h3>
                  <p className="text-text-secondary leading-relaxed">동네 의원부터 메이저 난임병원 까지, 전국의 수많은 병원이 이미 도입하여 검증한 솔루션입니다.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="numbers" className="py-40 md:py-56 px-6 md:px-12 bg-[#050508] text-center border-t border-b border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-20">
            <p className="text-accent font-semibold tracking-widest uppercase mb-4 inline-block">
              Numbers
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              신뢰는 말이 아닌, <br />
              <span className="text-text-secondary">숫자로 증명합니다</span>
            </h2>
          </div>

          <p className="text-xs text-text-secondary/50 font-light text-center mb-8">
            * 2026.01 기준
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-center">
            {numData.map((data, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-outfit font-black text-accent mb-4 tracking-tighter">
                  <CountUp end={data.target} suffix={data.suffix} />
                </div>
                <p className="text-lg text-text-secondary font-medium whitespace-pre-line">
                  {data.label}
                </p>
              </div>
            ))}
          </div>



        </div>
      </section>
    </>
  );
}
