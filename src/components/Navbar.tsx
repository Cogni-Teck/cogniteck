'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Detect theme class on html on mount
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 duration-300 ease-in-out border-b ${
        scrolled
          ? 'bg-background-custom/90 backdrop-blur-md py-3 h-16 border-outline/30 shadow-[0_4px_30px_rgba(0,0,0,0.15)]'
          : 'bg-transparent py-5 h-20 border-transparent'
      }`}
    >
      {/* Bottom border divider (Solid color - No gradients) */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-outline/20"></div>
      
      <div className="flex justify-between items-center h-full max-w-max-width mx-auto px-4 md:px-gutter gap-2">
        <div className="flex items-center gap-2">
          <img
            src="/logo.jpg"
            alt="Cogniteck Logo"
            className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover border border-primary/50 shadow-[0_0_10px_rgba(1,195,142,0.2)]"
          />
          <span className="text-xl md:text-headline-md font-black tracking-widest text-primary uppercase font-sans">
            Cogniteck
          </span>
        </div>
        <nav className="hidden md:flex gap-lg font-sans">
          <a
            className="text-label-sm font-semibold tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            Home
          </a>
          <a
            className="text-label-sm font-semibold tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#who-we-are"
          >
            Nosotros
          </a>
          <a
            className="text-label-sm font-semibold tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#services"
          >
            Servicios
          </a>
          <a
            className="text-label-sm font-semibold tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#contact"
          >
            Contacto
          </a>
        </nav>
        
        {/* Toggle Theme + CTA Button container */}
        <div className="flex items-center gap-sm">
          {/* Theme Toggler (Sun / Moon) */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema de color"
            className="p-2.5 rounded-xl border border-outline hover:border-primary bg-surface/50 hover:bg-surface transition-all duration-200 cursor-pointer flex items-center justify-center text-primary"
          >
            {theme === 'dark' ? (
              // Sun Icon (shows in dark mode)
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              // Moon Icon (shows in light mode)
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="bg-primary text-on-primary px-5 py-2.5 text-label-sm font-bold uppercase tracking-widest hover:shadow-[0_0_15px_rgba(1,195,142,0.3)] transition-all duration-200 rounded-xl"
          >
            Cotizar
          </a>
        </div>
      </div>
    </header>
  );
}
