import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out border-b ${scrolled
        ? 'bg-primary-dark/85 backdrop-blur-md border-white/10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
        : 'bg-transparent backdrop-blur-none border-transparent py-6'
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center relative w-full">
        {/* Logo */}
        <a href="#" className="flex items-center group relative z-50">
          <span className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">
            메디쏠
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent ml-1 mb-1 shadow-[0_0_10px_#00E5A0]"></span>
        </a>

        {/* Desktop Menu - Absolutely Centered */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 space-x-12 text-sm font-medium text-text-secondary">
          {['About', 'Solutions', 'Features', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-text-primary relative group py-2 tracking-wide font-outfit uppercase transition-colors"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3 relative z-50">
          <a
            href="https://api.mediloving.co.kr/rb/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-white/70 hover:bg-white/10 hover:border-white/30 hover:text-accent transition-all duration-300 backdrop-blur-sm"
          >
            메디러브
          </a>
          <div className="cta-button-wrapper small ml-2">
            <button
              onClick={onOpenModal}
              className="cta-button small"
            >
              도입 문의
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-primary relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Overlay Menu */}
        <div
          className={`fixed inset-0 bg-primary-dark z-40 flex flex-col items-center justify-center transition-opacity duration-500 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
          <ul className="flex flex-col items-center space-y-8 text-2xl font-bold">
            {['About', 'Solutions', 'Features', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-accent font-outfit uppercase tracking-wider"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="mt-12 w-[280px] flex flex-col gap-3">
            <a
              href="https://api.mediloving.co.kr/rb/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-full border border-white/15 bg-white/5 text-center font-bold text-accent/90 hover:bg-white/10 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              메디러브
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="cta-button large w-full mt-2"
            >
              도입 문의
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
