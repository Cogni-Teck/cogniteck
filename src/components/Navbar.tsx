'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <a
          href="#contact"
          className="bg-primary text-on-primary px-5 py-2.5 text-label-sm font-bold uppercase tracking-widest hover:shadow-[0_0_15px_rgba(1,195,142,0.3)] transition-all duration-200 rounded-xl"
        >
          Cotizar
        </a>
      </div>
    </header>
  );
}
