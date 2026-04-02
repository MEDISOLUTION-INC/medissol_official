import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  LayoutDashboard, 
  Timer, 
  ClipboardList, 
  FileSearch, 
  Syringe, 
  HeartPulse, 
  Snowflake, 
  Image as ImageIcon, 
  PenTool, 
  FileDown, 
  Share2, 
  Palette 
} from 'lucide-react';

const features = [
  // 1. 큰 카드 01
  { 
    id: '01', 
    size: 'big', 
    title: '메인 홈 & 개인화 대시보드', 
    desc: '오늘의 알림, 대기 순서, 내원 일정 — 열자마자 한눈에',
    Icon: LayoutDashboard,
    tags: ['#개인화', '#대시보드', '#알림']
  },
  // 2. 큰 카드 02
  { 
    id: '02', 
    size: 'big', 
    title: '실시간 대기 현황', 
    desc: '카페에서 커피 마시면서 내 순서 확인하세요',
    Icon: Timer,
    tags: ['#실시간', '#대기현황', '#스마트병원']
  },
  // 3. 작은 카드 03
  { id: '03', size: 'small', title: '모바일 문진표', desc: '병원 도착 전에 끝내는 문진표, EMR에 자동 저장', Icon: ClipboardList },
  // 4. 작은 카드 04
  { id: '04', size: 'small', title: '검사결과 조회', desc: '혈액검사부터 호르몬 수치까지, 내 손안의 진료 기록', Icon: FileSearch },
  // 5. 작은 카드 05
  { id: '05', size: 'small', title: '주사 & 투약 스케줄', desc: '오늘 맞을 주사, 오늘 먹을 약 — 잊지 않게 체크', Icon: Syringe },
  // 6. 작은 카드 08
  { id: '08', size: 'small', title: '진료 앨범', desc: '배아 사진, 검사 이미지를 안전하게 보관하고 언제든 열람', Icon: ImageIcon },
  // 7. 작은 카드 09
  { id: '09', size: 'small', title: '동의서 전자서명', desc: '모바일에서 서명 → EMR 자동 저장, 종이 동의서는 이제 그만', Icon: PenTool },
  // 8. 작은 카드 10
  { id: '10', size: 'small', title: '증빙서류 발급', desc: '연말정산용 납입확인서, 앱에서 신청하고 바로 다운로드', Icon: FileDown },
  // 9. 큰 카드 06
  { 
    id: '06', 
    size: 'big', 
    title: '시험관시술 현황', 
    desc: '채취 난자 → 수정란 → 이식 → 동결, 모든 STEP을 실시간으로',
    Icon: HeartPulse,
    tags: ['#시험관현황', '#배아배양', '#실시간알림'],
    badge: '난임 특화'
  },
  // 10. 큰 카드 07
  { 
    id: '07', 
    size: 'big', 
    title: '동결보관 & 만료 푸시', 
    desc: '소중한 배아의 만기일, 놓치지 않도록 알려드립니다',
    Icon: Snowflake,
    tags: ['#동결배아', '#만료알림', '#안전보관'],
    badge: '난임 특화'
  },
  // 11. 작은 카드 11
  { id: '11', size: 'small', title: '콘텐츠 & SNS', desc: '유튜브, 공지사항을 한 곳에서', Icon: Share2 },
  // 12. 작은 카드 12
  { id: '12', size: 'small', title: '디자인 커스텀', desc: '세상에 하나뿐인 전용 앱', Icon: Palette }
];

export default function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.bento-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-32 px-6 md:px-12 bg-primary-dark overflow-hidden selection:bg-accent selection:text-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center md:text-left mb-20 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-accent font-semibold tracking-widest uppercase mb-4 inline-block">
              Features
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              환자가 원하는 건 단 하나, <br className="hidden md:block"/>
              <span className="text-accent">쉽고 빠른 병원 경험</span>
            </h2>
          </div>
          <div className="md:max-w-xs text-left">
            <p className="text-lg text-text-secondary font-light leading-relaxed border-l-2 border-white/10 pl-6">
              12가지 핵심 기능이<br />
              하나의 앱에 담겨 있습니다
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-min gap-4 lg:gap-5">
          {features.map((feat) => {
            const isBig = feat.size === 'big';

            if (isBig) {
              return (
                <div 
                  key={feat.id} 
                  className="bento-card bento-big group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white/[0.03] border border-white/[0.06] hover:border-accent/30 hover:bg-white/[0.04] backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 ease-out lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-1 p-8 lg:p-10 min-h-[260px] md:min-h-[240px] hover:scale-[1.01]"
                >
                  {/* Watermark Number */}
                  <span className="watermark-num absolute -bottom-6 -right-4 text-8xl md:text-9xl font-outfit font-black text-white/[0.04] group-hover:text-white/[0.08] group-hover:-translate-y-4 transition-all duration-500 pointer-events-none select-none z-0">
                    {feat.id}
                  </span>

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-accent/10 transition-colors duration-300">
                        <feat.Icon className="text-accent group-hover:text-white transition-colors duration-300" size={32} />
                      </div>
                      {feat.badge && (
                        <span className="text-[10px] uppercase font-bold tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                          {feat.badge}
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                        {feat.title}
                      </h3>
                      <p className="text-base text-text-secondary font-light leading-relaxed max-w-sm">
                        {feat.desc}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 pt-8 mt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {feat.tags?.map((tag, i) => (
                        <span key={i} className="text-xs font-medium text-accent/60 group-hover:text-accent/80 border border-accent/20 bg-accent/5 rounded-full px-3 py-1 transition-colors duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div 
                  key={feat.id} 
                  className="bento-card group flex flex-col justify-center rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300 ease-out p-6 h-full min-h-[160px]"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors duration-300">
                      <feat.Icon className="text-white/40 group-hover:text-accent transition-colors duration-300" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors duration-300 leading-tight">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
