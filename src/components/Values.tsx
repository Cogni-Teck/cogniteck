'use client';

import ScrollReveal from './ScrollReveal';

export default function Values() {
  const steps = [
    {
      num: '01',
      title: 'Diagnóstico & Alcance',
      subtitle: 'Entender antes de programar',
      time: 'Día 1 - 3',
      description:
        'Nos reunimos para entender a fondo la operación de tu negocio. Identificamos procesos manuales ineficientes y definimos objetivos claros de software sin tecnicismos complejos.',
    },
    {
      num: '02',
      title: 'Propuesta & Prototipo',
      subtitle: 'Diseño de la solución visual',
      time: 'Día 4 - 7',
      description:
        'Creamos una propuesta técnica con alcances, costos y cronograma. Diseñamos un prototipo visual interactivo para que veas cómo funcionará el sistema o la web antes de escribir código.',
    },
    {
      num: '03',
      title: 'Ingeniería & Desarrollo',
      subtitle: 'Construcción con código sólido',
      time: 'Semana 2 - 6',
      description:
        'Escribimos código limpio, robusto y ultra-rápido en sprints semanales. Realizamos demostraciones funcionales cada viernes para que veas avances y nos des feedback en tiempo real.',
    },
    {
      num: '04',
      title: 'Lanzamiento & Soporte',
      subtitle: 'Puesta en marcha y evolución',
      time: 'Despliegue',
      description:
        'Desplegamos el sistema de forma segura en la nube, capacitamos a tu equipo y te entregamos documentación completa. Incluye soporte continuo vía WhatsApp para tu tranquilidad.',
    },
  ];

  return (
    <section className="py-xl bg-background-custom relative overflow-hidden" id="how-we-work">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[90px] pointer-events-none z-0"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-max-width mx-auto px-margin-mobile md:px-gutter relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <ScrollReveal>
            <span className="text-label-sm uppercase tracking-[0.25em] text-primary font-bold font-sans">
              Metodología de Trabajo
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-wider text-on-surface mt-base mb-sm leading-tight font-sans">
              Un proceso transparente y sin sorpresas
            </h2>
            <p className="text-body-lg text-on-surface-variant font-sans leading-relaxed">
              Creemos en las relaciones de confianza y el desarrollo predecible. Siempre sabrás en qué etapa está tu software, qué sigue y cuándo se entrega.
            </p>
          </ScrollReveal>
        </div>

        {/* Zig-Zag Cards Grid Layout */}
        <div className="relative max-w-6xl mx-auto mt-12 lg:mt-20 pt-4 pb-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              // Restore vertical zig-zag offset on desktop
              const isEven = idx % 2 === 0;
              const alignmentClass = isEven ? 'lg:-translate-y-8' : 'lg:translate-y-8';
              const borderGlowColor = 'hover:border-primary/60 hover:shadow-[0_4px_25px_rgba(1,195,142,0.06)]';
              
              return (
                <ScrollReveal
                  key={idx}
                  delay={idx * 120} // Staggered reveal delay
                  className={`relative w-full ${alignmentClass}`}
                >
                  {/* Floating Step Number */}
                  <div className="absolute -top-4 left-6 px-3 py-1 bg-background-custom border font-mono font-black text-md tracking-wider z-20 rounded-lg border-primary/35 text-primary shadow-[0_2px_10px_rgba(1,195,142,0.1)]">
                    {step.num}
                  </div>

                  {/* Step Card */}
                  <div
                    className={`card-glow h-full bg-surface border border-outline p-6 pt-10 rounded-2xl transition-all duration-300 flex flex-col justify-between relative group ${borderGlowColor} shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-[1.02]`}
                  >
                    <div>
                      {/* Step Time Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-2.5 py-0.5 border text-[10px] uppercase font-bold tracking-widest font-mono rounded-md bg-primary/5 border-primary/20 text-primary">
                          {step.time}
                        </span>
                      </div>

                      {/* Step Info */}
                      <h3 className="text-lg font-bold uppercase tracking-wide text-on-surface mb-1 font-sans group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold mb-3 font-sans text-primary/90">
                        {step.subtitle}
                      </p>
                      <p className="text-sm text-on-surface-variant font-sans leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
