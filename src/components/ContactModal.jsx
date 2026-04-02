import { useState } from 'react';
import { Mail, MessageCircle, X, Phone, Check, ArrowRight } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [copiedType, setCopiedType] = useState(null); // 'email', 'phone', or null

  const copyToClipboard = (text, type) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedType(type);
        setTimeout(() => setCopiedType(null), 2000);
      });
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedType(type);
        setTimeout(() => setCopiedType(null), 2000);
      } catch (err) {
        console.error('Copy failed', err);
      }
      document.body.removeChild(textArea);
    }
  };

  const contactOptions = [
    {
      id: 'kakao',
      type: 'link',
      name: '카카오톡 문의',
      description: '실시간 카카오채널 상담',
      icon: MessageCircle,
      href: 'https://pf.kakao.com/_mNNxhG/chat',
      color: 'bg-[#FEE500]',
      textColor: 'text-black'
    },
    {
      id: 'email',
      type: 'copy',
      name: '이메일 문의',
      description: 'medilove1004@medissollab.com',
      icon: Mail,
      value: 'medilove1004@medissollab.com',
      color: 'bg-white/5',
      textColor: 'text-white'
    },
    {
      id: 'phone',
      type: 'copy',
      name: '전화 상담',
      description: '1899-3342 (실시간 상담)',
      icon: Phone,
      value: '1899-3342',
      color: 'bg-white/5',
      textColor: 'text-white'
    }
  ];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0A0A0F] border border-white/10 w-full max-w-md rounded-[2.5rem] p-8 md:p-10 shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-full transition-all"
        >
          <X size={24} />
        </button>

        <div className="mb-10 text-left">
          <h3 className="text-3xl font-bold text-white mb-2">도입 문의</h3>
          <p className="text-text-secondary font-light">원하시는 상담 채널을 선택해 주세요.</p>
        </div>

        <div className="space-y-4">
          {contactOptions.map((option, idx) => {
            const isCopyType = option.type === 'copy';
            const isCurrentlyCopied = copiedType === option.id;

            const Content = () => (
              <>
                <div className={`p-3 rounded-xl ${option.textColor === 'text-black' ? 'bg-black/10' : 'bg-white/5'}`}>
                  {isCopyType && isCurrentlyCopied ? (
                    <Check className="text-accent" size={28} />
                  ) : (
                    <option.icon className={option.textColor === 'text-black' ? 'text-black' : 'text-accent'} size={28} />
                  )}
                </div>
                <div className="text-left flex-1">
                  <div className={`text-lg font-bold ${option.textColor}`}>
                    {isCopyType && isCurrentlyCopied ? '복사 완료!' : option.name}
                  </div>
                  <div className={`text-sm opacity-60 ${option.textColor}`}>
                    {option.description}
                  </div>
                </div>
                {!isCopyType && (
                  <ArrowRight className={`opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ${option.textColor}`} size={20} />
                )}
              </>
            );

            if (isCopyType) {
              return (
                <button
                  key={idx}
                  onClick={() => copyToClipboard(option.value, option.id)}
                  className={`w-full flex items-center gap-5 p-6 rounded-2xl border border-white/5 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(0,229,160,0.1)] transition-all group ${option.color}`}
                >
                  <Content />
                </button>
              );
            }

            return (
              <a
                key={idx}
                href={option.href}
                target={option.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className={`flex items-center gap-5 p-6 rounded-2xl border border-white/5 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(0,229,160,0.1)] transition-all group ${option.color}`}
              >
                <Content />
              </a>
            );
          })}
        </div>

        <p className="mt-10 text-xs text-center text-white/20 font-light">
          평일 상담 시간: 09:30 - 16:00 (주말 및 공휴일 제외)
        </p>
      </div>
    </div>
  );
}
