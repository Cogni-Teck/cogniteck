'use client';

import ScrollReveal from './ScrollReveal';

export default function Projects() {
  const projects = [
    {
      title: 'Atenea - Casa de Recuperación',
      category: 'Sitio Web & Reservas',
      description:
        'Desarrollamos una plataforma digital a medida para una casa de recuperación postoperatoria. Creamos un diseño limpio que transmite paz y confianza, optimizando la velocidad de carga y adaptando la navegación para que los clientes puedan agendar consultas y ver servicios de forma intuitiva.',
      image: '/atenea.jpg',
      link: 'https://atenea-casaderecuperacion.netlify.app/',
      badge: 'Caso de Éxito Real',
    },
  ];

  return (
    <section className="py-xl bg-surface-container-low" id="projects">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-gutter">
        {/* Section Header */}
        <div className="mb-xl flex flex-col md:flex-row justify-between items-start md:items-end gap-md">
          <ScrollReveal>
            <div>
              <span className="text-label-sm uppercase tracking-wider text-secondary font-semibold font-sans">
                Nuestro Trabajo
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-headline-xl mt-base font-extrabold uppercase tracking-wider text-on-surface">
                Proyectos con impacto real
              </h2>
            </div>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-lg">
          {projects.map((project, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 200}
            >
              <div
                className="bg-white border border-outline rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.05)] hover:border-primary/30 transition-all duration-500 group card-glow"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
                }}
              >
                {/* Image side */}
                <div className="lg:col-span-7 overflow-hidden relative aspect-[16/10] lg:aspect-auto min-h-[300px] border-b lg:border-b-0 lg:border-r border-outline">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Text side */}
                <div className="lg:col-span-5 p-md md:p-lg flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-xs mb-xs">
                      <span className="text-label-sm text-secondary font-semibold font-sans uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[11px] px-2.5 py-0.5 bg-primary/10 text-primary rounded-full font-semibold font-sans">
                        {project.badge}
                      </span>
                    </div>
                    <h3 className="text-headline-md mb-md font-bold uppercase tracking-wide text-on-surface">
                      {project.title}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-body-md font-sans font-light">
                      {project.description}
                    </p>
                  </div>
                  <div className="pt-md border-t border-outline/60 mt-md">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-sm px-6 py-3.5 bg-primary text-on-primary text-label-sm font-bold uppercase tracking-wider rounded-xl hover:bg-secondary hover:shadow-[0_4px_15px_rgba(79,70,229,0.3)] transition-all duration-300 font-sans shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Visitar Sitio Web
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
