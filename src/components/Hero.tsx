'use client';

import { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xAxis = (window.innerWidth / 2 - e.clientX) / 80;
      const yAxis = (window.innerHeight / 2 - e.clientY) / 80;
      setMousePos({ x: xAxis, y: yAxis });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background-custom pt-32 pb-12">
      {/* Immersive radial glows for depth */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Behind-the-scenes Software Blueprint SVG Overlay (Flat colors) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none select-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.05)`,
        }}
      >
        <svg className="w-full h-full opacity-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          {/* Blueprint fine grid */}
          <defs>
            <pattern id="blueprint-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
              <path d="M 40 0 L 40 80 M 0 40 L 80 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.5" strokeDasharray="2,2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />

          {/* Website Mockup / Wireframe Box (Right Side) */}
          <g transform="translate(1000, 150)">
            {/* Browser window */}
            <rect x="0" y="0" width="750" height="500" rx="12" fill="none" stroke="rgba(1, 195, 142, 0.2)" strokeWidth="2" />
            {/* Header / Tabs bar */}
            <line x1="0" y1="40" x2="750" y2="40" stroke="rgba(1, 195, 142, 0.2)" strokeWidth="1.5" />
            {/* Browser circles */}
            <circle cx="20" cy="20" r="5" fill="none" stroke="rgba(1, 195, 142, 0.2)" strokeWidth="1.5" />
            <circle cx="38" cy="20" r="5" fill="none" stroke="rgba(1, 195, 142, 0.2)" strokeWidth="1.5" />
            <circle cx="56" cy="20" r="5" fill="none" stroke="rgba(1, 195, 142, 0.2)" strokeWidth="1.5" />
            <line x1="90" y1="20" x2="250" y2="20" stroke="rgba(1, 195, 142, 0.1)" strokeWidth="1" strokeDasharray="3,3" />

            {/* Sidebar wireframe layout */}
            <rect x="25" y="65" width="160" height="410" rx="6" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" />
            <line x1="45" y1="100" x2="165" y2="100" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2" />
            <line x1="45" y1="140" x2="145" y2="140" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />
            <line x1="45" y1="175" x2="130" y2="175" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />
            <line x1="45" y1="210" x2="150" y2="210" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />

            {/* Main content grid wireframe */}
            <rect x="210" y="65" width="515" height="150" rx="8" fill="none" stroke="rgba(1, 195, 142, 0.15)" strokeWidth="1.5" />
            {/* Image placeholder symbol inside box */}
            <line x1="210" y1="65" x2="725" y2="215" stroke="rgba(1, 195, 142, 0.05)" strokeWidth="1" />
            <line x1="725" y1="65" x2="210" y2="215" stroke="rgba(1, 195, 142, 0.05)" strokeWidth="1" />

            {/* Subgrid cards */}
            <rect x="210" y="240" width="245" height="235" rx="8" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" />
            <circle cx="332" cy="300" r="30" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" />
            <line x1="250" y1="365" x2="415" y2="365" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" />
            <line x1="280" y1="395" x2="385" y2="395" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />

            <rect x="480" y="240" width="245" height="235" rx="8" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" />
            <circle cx="602" cy="300" r="30" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" />
            <line x1="520" y1="365" x2="685" y2="365" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" />
            <line x1="550" y1="395" x2="655" y2="395" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />

            {/* Dimensional spec lines */}
            <line x1="0" y1="-20" x2="750" y2="-20" stroke="rgba(1, 195, 142, 0.2)" strokeWidth="1" />
            <line x1="0" y1="-25" x2="0" y2="-15" stroke="rgba(1, 195, 142, 0.2)" strokeWidth="1" />
            <line x1="750" y1="-25" x2="750" y2="-15" stroke="rgba(1, 195, 142, 0.2)" strokeWidth="1" />
            <text x="350" y="-30" fill="rgba(1, 195, 142, 0.3)" fontFamily="monospace" fontSize="11" letterSpacing="2">W: 1200px</text>
          </g>

          {/* Software Architecture & User Flow Diagram */}
          <g transform="translate(1050, 700)">
            <rect x="0" y="10" width="120" height="40" rx="6" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
            <text x="25" y="34" fill="rgba(255, 255, 255, 0.3)" fontFamily="monospace" fontSize="11" letterSpacing="1">src/Router</text>

            <path d="M 120 30 L 220 30" fill="none" stroke="rgba(1, 195, 142, 0.2)" strokeWidth="1.5" strokeDasharray="3,3" />
            <polygon points="220,30 212,26 212,34" fill="rgba(1, 195, 142, 0.2)" />

            <rect x="220" y="10" width="140" height="40" rx="6" fill="none" stroke="rgba(1, 195, 142, 0.2)" strokeWidth="1.5" />
            <text x="235" y="34" fill="rgba(1, 195, 142, 0.4)" fontFamily="monospace" fontSize="11" letterSpacing="1">UserController</text>

            <path d="M 360 30 L 450 30 L 450 -30 L 520 -30" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" />
            <polygon points="520,-30 512,-34 512,-26" fill="rgba(255, 255, 255, 0.1)" />

            <path d="M 360 30 L 450 30 L 450 90 L 520 90" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" />
            <polygon points="520,90 512,86 512,94" fill="rgba(255, 255, 255, 0.1)" />

            <rect x="520" y="-55" width="120" height="50" rx="6" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" />
            <text x="535" y="-25" fill="rgba(255, 255, 255, 0.3)" fontFamily="monospace" fontSize="11" letterSpacing="1">AuthService</text>

            <rect x="520" y="65" width="120" height="50" rx="6" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" />
            <text x="530" y="95" fill="rgba(255, 255, 255, 0.3)" fontFamily="monospace" fontSize="11" letterSpacing="1">QueryBuilder</text>

            <path d="M 720 15 C 720 0, 790 0, 790 15 L 790 75 C 790 90, 720 90, 720 75 Z" fill="none" stroke="rgba(1, 195, 142, 0.2)" strokeWidth="1.5" />
            <path d="M 720 15 C 720 30, 790 30, 790 15" fill="none" stroke="rgba(1, 195, 142, 0.2)" strokeWidth="1.5" />
            <path d="M 720 35 C 720 50, 790 50, 790 35" fill="none" stroke="rgba(1, 195, 142, 0.1)" strokeWidth="1" />
            <path d="M 720 55 C 720 70, 790 70, 790 55" fill="none" stroke="rgba(1, 195, 142, 0.1)" strokeWidth="1" />
            <text x="735" y="50" fill="rgba(1, 195, 142, 0.3)" fontFamily="monospace" fontSize="10" letterSpacing="1">POSTGRES</text>

            <path d="M 640 90 L 680 90 L 680 45 L 720 45" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" />
            <polygon points="720,45 712,41 712,49" fill="rgba(255, 255, 255, 0.1)" />
          </g>

          {/* Left / Center background sketches */}
          <g transform="translate(100, 480)" opacity="0.4">
            <circle cx="50" cy="50" r="4" fill="rgba(1, 195, 142, 0.3)" />
            <circle cx="150" cy="-20" r="4" fill="rgba(1, 195, 142, 0.3)" />
            <circle cx="280" cy="30" r="4" fill="rgba(1, 195, 142, 0.3)" />
            <circle cx="180" cy="120" r="4" fill="rgba(1, 195, 142, 0.3)" />

            <line x1="50" y1="50" x2="150" y2="-20" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
            <line x1="150" y1="-20" x2="280" y2="30" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
            <line x1="280" y1="30" x2="180" y2="120" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
            <line x1="180" y1="120" x2="50" y2="50" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
            <line x1="150" y1="-20" x2="180" y2="120" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />

            <text x="65" y="54" fill="rgba(255, 255, 255, 0.15)" fontFamily="monospace" fontSize="9">next.js</text>
            <text x="165" y="-16" fill="rgba(255, 255, 255, 0.15)" fontFamily="monospace" fontSize="9">typescript</text>
            <text x="295" y="34" fill="rgba(255, 255, 255, 0.15)" fontFamily="monospace" fontSize="9">tailwind.v4</text>
            <text x="195" y="124" fill="rgba(255, 255, 255, 0.15)" fontFamily="monospace" fontSize="9">postgresql</text>
          </g>
        </svg>
      </div>

      {/* Immersive Grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#223c52_1px,transparent_1px),linear-gradient(to_bottom,#223c52_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-[0.07] pointer-events-none z-0"></div>

      {/* Main Hero Content */}
      <div className="max-w-max-width w-full mx-auto px-margin-mobile md:px-gutter relative z-10 flex-1 flex flex-col justify-center pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-left">
            <ScrollReveal className="w-full">
              {/* Software Boutique Prefix Label */}
              <span className="text-label-sm font-bold uppercase tracking-[0.25em] text-primary mb-md font-sans block">
                Desarrollo de software y diseño de páginas web
              </span>

              {/* Oversized Headline (No text gradients, solid color) */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-md leading-[1.05] text-on-surface max-w-4xl font-sans uppercase">
                Creamos software para <span className="text-primary">negocios reales</span>.
              </h1>

              {/* Subtitle */}
              <p className="text-body-lg text-on-surface-variant mb-xl max-w-2xl leading-relaxed font-sans font-light">
                Desarrollamos páginas web, sistemas y herramientas digitales adaptadas a la forma en que trabaja tu negocio.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-md w-full sm:w-auto items-start font-sans">
                <a
                  className="group inline-flex items-center justify-center gap-sm px-8 py-4 bg-primary text-on-primary font-bold text-label-sm uppercase tracking-widest transition-all rounded-xl hover:shadow-[0_4px_15px_rgba(1,195,142,0.3)] hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto cursor-pointer"
                  href="#contact"
                >
                  Hablemos de tu proyecto
                  <svg
                    className="w-4 h-4 text-current transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-sm px-8 py-4 bg-transparent text-on-surface hover:text-primary border border-outline hover:border-primary font-bold text-label-sm uppercase tracking-widest transition-all rounded-xl hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto"
                  href="#services"
                >
                  Nuestros Servicios
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Floating High-Tech Mockup/Dashboard Widgets */}
          <div className="lg:col-span-5 hidden lg:flex flex-col gap-6 relative h-[560px] justify-center items-center select-none">
            {/* Ambient glows behind widgets */}
            <div className="absolute w-[280px] h-[280px] bg-primary/5 rounded-full blur-[80px] -z-10 animate-pulse"></div>

            <ScrollReveal className="w-full flex flex-col gap-6 items-center">
              {/* Widget 1: Dev Terminal Widget */}
              <div
                className="float-card card-glow w-full max-w-[360px] bg-[#0c0e13] border border-outline/30 rounded-2xl p-4 font-mono text-[11px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] self-start ml-2 text-slate-300"
                style={{ animationDelay: '0s' }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
                }}
              >
                <div className="flex items-center justify-between border-b border-outline/35 pb-2 mb-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <span className="text-[9px] text-slate-500 select-none">bash - dev-server</span>
                </div>
                <div className="space-y-1 text-slate-400">
                  <p className="text-primary font-bold"><span className="text-slate-300">cogniteck@terminal:~$</span> npm run build:prod</p>
                  <p className="text-slate-500">&gt; bundling client-side components...</p>
                  <p className="text-green-400 font-bold font-mono">✓ webpack compiled successfully [Next.js v16]</p>
                  <p className="text-slate-500">&gt; establishing secure PostgreSQL tunnel...</p>
                  <p className="text-primary font-bold">✓ connection live on secure-db-port 5432</p>
                  <p className="text-primary font-bold animate-pulse">➜ active deploy: https://cogniteck-v1.alpha</p>
                </div>
              </div>

              {/* Widget 2: SaaS Metric Widget */}
              <div
                className="float-card card-glow w-full max-w-[260px] bg-surface border border-primary/20 hover:border-primary/50 rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.15)] self-end -mt-6 mr-4"
                style={{ animationDelay: '-1.5s' }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant">SaaS Revenue Core</p>
                </div>
                <p className="text-2xl font-bold font-sans text-on-surface">S/ 18,240.00</p>
                <p className="text-[9.5px] text-on-surface-variant mb-2">Facturación del mes</p>
                <div className="flex items-center gap-1 text-[10px] text-green-400 font-bold">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                  <span>+22.4% vs mes anterior</span>
                </div>
              </div>

              {/* Widget 3: Integrations & Flows */}
              <div
                className="float-card card-glow w-full max-w-[310px] bg-surface border border-outline rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.1)] self-start -mt-4 ml-6"
                style={{ animationDelay: '-3s' }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
                }}
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-3">Integración de Flujos</p>
                <div className="flex items-center justify-between text-[9.5px] text-on-surface-variant">
                  <div className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg font-bold">SUNAT API</div>
                  <div className="w-6 h-px bg-primary/30 relative">
                    <div className="absolute -top-1 left-1/2 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                  </div>
                  <div className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg font-bold">WhatsApp</div>
                  <div className="w-6 h-px bg-primary/30"></div>
                  <div className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg font-bold">DB Local</div>
                </div>
              </div>

              {/* Widget 4: AI Core Suggestion */}
              <div
                className="float-card card-glow w-full max-w-[250px] bg-surface border border-primary/30 rounded-2xl p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.15)] self-end -mt-6 mr-6 flex items-start gap-2.5"
                style={{ animationDelay: '-4.5s' }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
                }}
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 animate-pulse text-primary">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z"/>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] uppercase font-bold text-primary tracking-wider mb-0.5">CogniTeck AI Core</p>
                  <p className="text-[10px] text-on-surface-variant leading-relaxed font-light font-sans">
                    "Recomendación: Optimizar caché de BD aplicada con éxito (+18% velocidad de carga)"
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="max-w-max-width w-full mx-auto px-margin-mobile md:px-gutter relative z-10 mt-12 mb-8"></div>

      {/* Infinite Scrolling Ribbon */}
      <div className="w-full bg-surface border-y border-outline py-4.5 overflow-hidden z-10 select-none backdrop-blur-sm">
        <div className="marquee-track">
          <div className="flex items-center gap-16 px-8 text-on-surface text-xs font-mono font-semibold tracking-widest uppercase whitespace-nowrap">
            <span>Software a Medida</span> <span>•</span>
            <span>Landing Pages Premium</span> <span>•</span>
            <span>SaaS Core en Desarrollo</span> <span>•</span>
            <span>Integraciones de API</span> <span>•</span>
            <span>WhatsApp CRM</span> <span>•</span>
            <span>Bases de Datos PostgreSQL</span> <span>•</span>
            <span>Inteligencia Artificial</span> <span>•</span>
            <span>Automatizaciones de Procesos</span> <span>•</span>
            <span>Infraestructura Cloud</span> <span>•</span>
          </div>
          <div className="flex items-center gap-16 px-8 text-on-surface text-xs font-mono font-semibold tracking-widest uppercase whitespace-nowrap" aria-hidden="true">
            <span>Software a Medida</span> <span>•</span>
            <span>Landing Pages Premium</span> <span>•</span>
            <span>SaaS Core en Desarrollo</span> <span>•</span>
            <span>Integraciones de API</span> <span>•</span>
            <span>WhatsApp CRM</span> <span>•</span>
            <span>Bases de Datos PostgreSQL</span> <span>•</span>
            <span>Inteligencia Artificial</span> <span>•</span>
            <span>Automatizaciones de Procesos</span> <span>•</span>
            <span>Infraestructura Cloud</span> <span>•</span>
          </div>
        </div>
      </div>
    </section>
  );
}
