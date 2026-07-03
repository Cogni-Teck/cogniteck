'use client';

import ScrollReveal from './ScrollReveal';

export default function Services() {
  const services = [
    {
      num: '01',
      title: 'Landing Pages',
      forWhom: 'Conversión & Ventas',
      solves: 'Ideal para transformar visitas de publicidad en clientes reales. Si estás anunciándote en redes o Google, necesitas esto.',
      bullets: [
        'Diseño único, sin plantillas repetidas',
        'Textos redactados para convencer',
        'Carga ultra-rápida y botón directo a WhatsApp'
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      )
    },
    {
      num: '02',
      title: 'Sitios Web Corporativos',
      forWhom: 'Presencia & Confianza',
      solves: 'Tu carta de presentación digital. Transmite seriedad, profesionalismo y confianza a las personas que buscan tus servicios.',
      bullets: [
        'Estructura clara y fácil de navegar',
        'Optimización para aparecer en Google (SEO)',
        'Fácil de actualizar por ti mismo en el futuro'
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" x2="22" y1="12" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      num: '03',
      title: 'Sistemas a Medida',
      forWhom: 'Operación & Control',
      solves: 'Automatiza tareas repetitivas de tu día a día: control de citas, registro de clientes, gestión de inventario o reportes.',
      bullets: [
        'Adaptado a la forma exacta en que ya trabajas',
        'Bases de datos rápidas y seguras',
        'Acceso privado desde cualquier dispositivo'
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      )
    },
    {
      num: '04',
      title: 'Automatización de Procesos',
      forWhom: 'Eficiencia & Conectividad',
      solves: 'Conectamos tus herramientas diarias (WhatsApp, CRM, Gmail, Excel) para que trabajen por ti en piloto automático, sin errores humanos.',
      bullets: [
        'Integración de APIs y flujos con Make/Zapier',
        'Bots de WhatsApp para atención y recordatorios',
        'Sincronización de datos e informes automáticos'
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="6" height="6" x="3" y="3" rx="1" />
          <rect width="6" height="6" x="15" y="15" rx="1" />
          <path d="M9 6h6a2 2 0 0 1 2 2v7" />
          <path d="M15 9h-6a2 2 0 0 0-2 2v4" />
          <circle cx="15" cy="9" r="1" />
          <circle cx="9" cy="15" r="1" />
        </svg>
      )
    },
    {
      num: '05',
      title: 'SaaS Personalizados',
      forWhom: 'Emprendimiento & Escala',
      solves: 'Estructuramos y programamos tu idea de negocio en la nube para que puedas comercializarla bajo un modelo de suscripción.',
      bullets: [
        'Arquitectura escalable y código limpio',
        'Pasarelas de pago integradas (Stripe, etc.)',
        'Panel de administración robusto'
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42-1.89-1.93-3.5-4-3.5-2.45 0-4.5 2-4.5 4.5 0 1.25.5 2.45 1.3 3.3a3 3 0 0 0 .7 5.7h9z" />
          <path d="M12 12v6" />
          <path d="m9 15 3-3 3 3" />
        </svg>
      )
    },
    {
      num: '06',
      title: 'Soporte y Cuidado',
      forWhom: 'Tranquilidad & Continuidad',
      solves: 'Nos encargamos de que tu sitio web o sistema esté siempre en línea, seguro, actualizado y funcionando rápido.',
      bullets: [
        'Monitoreo continuo de caídas',
        'Copias de seguridad semanales',
        'Soporte rápido vía WhatsApp o correo'
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-xl bg-background-custom relative overflow-hidden" id="services">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-max-width mx-auto px-margin-mobile md:px-gutter relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-xl">
          <ScrollReveal>
            <span className="text-label-sm uppercase tracking-[0.2em] text-primary font-semibold font-sans">
              Servicios adaptados
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-on-surface mt-base mb-md leading-tight">
              Soluciones prácticas para tu negocio
            </h2>
            <div className="h-0.5 w-16 bg-primary mb-md"></div>
            <p className="text-body-lg text-on-surface-variant font-sans leading-relaxed max-w-2xl">
              No vendemos humo tecnológico ni infraestructura corporativa innecesaria. Creamos herramientas digitales pensadas exclusivamente para que tu negocio funcione mejor y consiga más clientes.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter items-stretch">
          {services.map((service, idx) => (
            <ScrollReveal
              key={idx}
              delay={(idx % 3) * 150} // Stagger by column
              className="h-full"
            >
              <div
                className="group relative bg-surface border border-outline p-6 md:p-8 rounded-2xl transition-all duration-300 hover:border-primary/50 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(1,195,142,0.08)] hover:scale-[1.02] h-full card-glow"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
                }}
              >
                {/* Glowing Accent Top Bar (Solid flat color instead of gradient) */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Large Outline Step Number in Background */}
                <div 
                  aria-hidden="true"
                  className="absolute right-6 top-6 font-mono font-black text-7xl text-transparent pointer-events-none select-none opacity-5 group-hover:opacity-10 transition-all duration-300 group-hover:scale-105"
                  style={{ WebkitTextStroke: '1px var(--color-primary)' }}
                >
                  {service.num}
                </div>

                <div>
                  {/* Icon & Target Audience Row */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="p-3 bg-primary/5 border border-primary/20 rounded-xl group-hover:bg-primary/10 group-hover:border-primary/40 transition-all duration-300 shadow-[0_0_15px_rgba(1,195,142,0.05)] text-primary">
                      {service.icon}
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-[10px] bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md font-mono font-bold text-primary uppercase tracking-widest">
                      {service.forWhom}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-wide text-on-surface mb-3 font-sans group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm text-on-surface-variant font-sans mb-6 leading-relaxed">
                    {service.solves}
                  </p>
                </div>

                {/* What's included Section */}
                <div className="pt-5 border-t border-outline/40">
                  <span className="text-[10px] uppercase tracking-widest text-primary/85 font-bold font-mono block mb-3">
                    ¿QUÉ INCLUYE?
                  </span>
                  <ul className="space-y-2">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-sm text-on-surface font-sans">
                        <span className="text-primary font-mono text-[12px] mt-0.5 select-none font-bold group-hover:translate-x-0.5 transition-transform duration-300">&gt;</span>
                        <span className="text-on-surface-variant group-hover:text-on-surface transition-colors duration-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
