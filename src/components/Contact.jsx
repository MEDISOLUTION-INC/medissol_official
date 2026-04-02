import { ArrowRight } from 'lucide-react';

export default function Contact({ onOpenModal }) {
  return (
    <section id="contact" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background - Minimal Dark Gradient */}
      <div className="absolute inset-0 bg-primary-dark z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[1.1] mb-8 text-white">
          다음 디지털 전환의 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent to-accent-secondary">
            주인공은 당신의 병원입니다
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-text-secondary font-light mb-16 max-w-2xl">
          준비되셨나요? 병원의 내일, 지금 메디쏠과 함께 설계하세요.
        </p>

        <div className="cta-button-wrapper large group">
          <button
            onClick={onOpenModal}
            className="cta-button large gap-4"
          >
            <span>도입 문의하기</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>


      </div>
    </section>
  );
}
