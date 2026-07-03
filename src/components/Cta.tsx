'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Cta() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Sitio Web');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const projectOptions = [
    'Sitio Web',
    'Landing Page',
    'Sistema a Medida',
    'SaaS',
    'Automatización',
    'Otro'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `¡Hola equipo CogniTeck! Mi nombre es ${name}. Estoy interesado en desarrollar un ${projectType}.\nDetalles: ${message || 'Sin mensaje adicional'}.\nContacto: ${email}`
    );
    return `https://wa.me/519891216130?text=${text}`;
  };

  return (
    <section className="py-xl bg-background-custom border-t border-outline/50 relative overflow-hidden" id="contact">
      {/* Soft background glows */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-max-width mx-auto px-margin-mobile md:px-gutter relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-stretch">

          {/* Left Column: Premium Pitch & Direct Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-lg">
            <ScrollReveal className="space-y-md">
              <span className="text-label-sm uppercase tracking-[0.2em] text-primary font-bold font-sans block">
                ¿Tienes una idea en mente?
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-wider text-on-surface leading-tight font-sans">
                Hagamos algo <br className="hidden md:inline" />
                <span className="text-primary">extraordinario</span>
              </h2>
              <p className="text-body-md text-on-surface-variant font-sans font-light leading-relaxed max-w-[420px]">
                Cuéntanos tu proyecto. Te ayudamos a aterrizar tus requerimientos técnicos para crear una solución rápida, de alto impacto y sin fricciones.
              </p>
            </ScrollReveal>

            <ScrollReveal className="space-y-sm pt-4 lg:pt-0">
              {/* Info cards */}
              <div className="space-y-3">
                {/* Response Time Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 rounded-full">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
                  {/* <span className="text-[10px] uppercase font-bold tracking-wider text-primary font-mono">
                    Tiempo de respuesta: &lt; 2 horas
                  </span> */}
                </div>

                {/* Email Contact Card */}
                <div className="flex items-center gap-3 p-4 bg-surface border border-outline rounded-2xl shadow-sm">
                  <div className="p-2.5 bg-primary/5 border border-primary/10 rounded-xl text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[9.5px] uppercase font-bold text-on-surface-variant block tracking-wider font-mono">Escríbenos</span>
                    <a href="mailto:hola@cogniteck.com" className="text-sm font-semibold text-on-surface hover:text-primary transition-colors font-sans">
                      hola@cogniteck.com
                    </a>
                  </div>
                </div>

                {/* Phone Contact Card */}
                <div className="flex items-center gap-3 p-4 bg-surface border border-outline rounded-2xl shadow-sm">
                  <div className="p-2.5 bg-primary/5 border border-primary/15 rounded-xl text-primary">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.835-4.577c1.603.951 3.206 1.455 4.81 1.457 5.432 0 9.851-4.388 9.854-9.78.002-2.611-1.012-5.067-2.859-6.916C16.8 2.338 14.364 1.325 11.8 1.325c-5.438 0-9.858 4.387-9.86 9.78-.001 1.838.503 3.626 1.464 5.203l-.97 3.548 3.658-.958zm13.111-7.234c-.218-.109-1.289-.636-1.488-.709-.199-.072-.344-.109-.489.109-.145.218-.56.709-.687.854-.127.145-.254.163-.472.054-.218-.109-.921-.34-1.754-1.082-.648-.578-1.086-1.293-1.213-1.51-.127-.218-.014-.336.095-.444.098-.098.218-.254.327-.381.109-.127.145-.218.218-.363.072-.145.036-.272-.018-.381-.054-.109-.489-1.179-.67-1.616-.177-.428-.358-.369-.489-.376-.127-.007-.272-.007-.417-.007-.145 0-.381.054-.58.272-.199.218-.761.744-.761 1.815 0 1.071.78 2.105.889 2.25.109.145 1.535 2.344 3.717 3.284.519.223.924.357 1.24.458.521.165.995.142 1.369.086.417-.063 1.289-.526 1.47-1.034.181-.508.181-.943.127-1.034-.054-.09-.2-.145-.417-.254z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[9.5px] uppercase font-bold text-on-surface-variant block tracking-wider font-mono">WhatsApp directo</span>
                    <a href="https://wa.me/519891216130" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-on-surface hover:text-[#01c38e] transition-colors font-sans">
                      +51 989 121 6130
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Modern Dynamic Form */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="bg-surface border border-outline p-6 md:p-8 lg:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-md relative overflow-hidden">
                {/* Decorative Accent Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />

                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-10 space-y-md font-sans">
                    <div className="text-primary animate-bounce p-4 bg-primary/5 rounded-full border border-primary/10">
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-wider text-on-surface font-sans">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-body-md text-on-surface-variant max-w-[460px] font-light leading-relaxed">
                      Gracias, <strong>{name}</strong>. Nos pondremos en contacto contigo vía <strong>{email}</strong> en breve. Si lo prefieres, puedes duplicar tu consulta a nuestro chat de WhatsApp para agilizar.
                    </p>
                    <div className="pt-6">
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-xs px-6 py-3 bg-primary text-on-primary text-label-sm font-bold uppercase tracking-wider rounded-xl hover:shadow-[0_4px_15px_rgba(1,195,142,0.3)] transition-all font-sans"
                      >
                        Enviar por WhatsApp
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Two Column Row (Name and Email) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="user-name" className="text-[11px] uppercase tracking-wider font-bold text-on-surface-variant font-mono">
                          Nombre completo *
                        </label>
                        <input
                          id="user-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ej. Alessandro Silva"
                          className="w-full bg-background-custom border border-outline focus:border-primary px-4 py-3 rounded-xl focus:outline-none text-on-surface placeholder-on-surface-variant/40 transition-all font-sans text-sm"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="user-email" className="text-[11px] uppercase tracking-wider font-bold text-on-surface-variant font-mono">
                          Correo electrónico *
                        </label>
                        <input
                          id="user-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Ej. cliente@empresa.com"
                          className="w-full bg-background-custom border border-outline focus:border-primary px-4 py-3 rounded-xl focus:outline-none text-on-surface placeholder-on-surface-variant/40 transition-all font-sans text-sm"
                        />
                      </div>
                    </div>

                    {/* Interactive Project Type Chip Selection */}
                    <div className="flex flex-col gap-2">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-on-surface-variant font-mono">
                        ¿Qué tipo de proyecto necesitas?
                      </span>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {projectOptions.map((option) => {
                          const isSelected = projectType === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setProjectType(option)}
                              className={`px-4 py-2.5 text-xs font-semibold rounded-xl border font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${isSelected
                                ? 'bg-primary border-primary text-on-primary shadow-md shadow-primary/20 scale-[1.02]'
                                : 'bg-background-custom border-outline text-on-surface-variant hover:border-primary/50'
                                }`}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="user-message" className="text-[11px] uppercase tracking-wider font-bold text-on-surface-variant font-mono">
                        Detalles del proyecto
                      </label>
                      <textarea
                        id="user-message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe brevemente tus objetivos, requerimientos o ideas..."
                        className="w-full bg-background-custom border border-outline focus:border-primary px-4 py-3 rounded-xl focus:outline-none text-on-surface placeholder-on-surface-variant/40 transition-all font-sans text-sm resize-none"
                      />
                    </div>

                    {/* Submit Button Row */}
                    <div className="pt-4 border-t border-outline/50 flex flex-col sm:flex-row items-center justify-between gap-md">
                      <span className="text-[11px] text-on-surface-variant font-sans opacity-70">
                        * Todos los campos marcados con asterisco son requeridos.
                      </span>

                      <button
                        type="submit"
                        className="group inline-flex items-center justify-center gap-xs px-8 py-4 bg-primary text-on-primary font-bold text-label-sm uppercase tracking-widest transition-all rounded-xl hover:shadow-[0_4px_15px_rgba(1,195,142,0.3)] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto cursor-pointer"
                      >
                        Enviar Solicitud
                        <svg
                          className="w-4 h-4 text-current transition-transform duration-200 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
