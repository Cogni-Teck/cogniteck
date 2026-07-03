'use client';

import ScrollReveal from './ScrollReveal';

export default function About() {
  const team = [
    {
      name: 'Alessandro',
      role: 'Desarrollador Fullstack',
      desc: 'Especialista en conectar el diseño de interfaz con la lógica del servidor, asegurando que tu plataforma sea atractiva visualmente y sumamente rápida.',
    },
    {
      name: 'Alen',
      role: 'Desarrollador Fullstack',
      desc: 'Experto en estructurar bases de datos robustas, API REST y toda la arquitectura detrás de escena para que el sistema opere sin interrupciones.',
    },
    {
      name: 'Carlos',
      role: 'Desarrollador Fullstack',
      desc: 'Enfocado en la automatización de procesos, integraciones de pago seguras y despliegue confiable en la nube para que tu software sea 100% estable.',
    },
  ];

  return (
    <section className="py-xl bg-surface-container-low" id="who-we-are">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-gutter">
        {/* Section Header */}
        <div className="max-w-2xl mb-xl">
          <ScrollReveal>
            <span className="text-label-sm uppercase tracking-wider text-primary font-semibold font-sans">
              Quiénes Somos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-headline-xl mt-base font-extrabold uppercase tracking-wider text-on-surface">
              Personas reales construyendo soluciones reales
            </h2>
            <p className="text-body-lg text-on-surface-variant mt-sm font-sans font-light">
              Somos un equipo pequeño de 3 desarrolladores apasionados por la tecnología práctica. No nos escondemos detrás de capas de ejecutivos o gerentes de cuenta: hablas y trabajas directamente con nosotros.
            </p>
          </ScrollReveal>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {team.map((member, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 150}
              className="h-full"
            >
              <div
                className="bg-surface border border-outline rounded-2xl p-6 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(1,195,142,0.06)] hover:scale-[1.02] h-full card-glow"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
                }}
              >
                <div>
                  {/* Mobile Header: Avatar + Title inline side-by-side */}
                  <div className="flex items-center gap-4 mb-4 md:flex-col md:items-start md:gap-0">
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center md:mb-md text-primary font-sans text-xl md:text-headline-md font-extrabold border border-primary/20 shadow-[0_0_10px_rgba(1,195,142,0.15)]">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-headline-md font-bold uppercase tracking-wide text-on-surface mb-1 md:mb-xs">
                        {member.name}
                      </h3>
                      <span className="text-xs md:text-label-sm text-primary font-semibold font-sans tracking-wide block md:mb-sm uppercase">
                        {member.role}
                      </span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant font-sans text-sm md:text-body-md leading-relaxed font-light">
                    {member.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-outline/50 flex gap-xs text-[12px] text-on-surface-variant/80 font-sans">
                  <span className="font-semibold text-primary">Contacto directo</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
