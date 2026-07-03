'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline/80">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-max-width mx-auto py-xl px-margin-mobile md:px-gutter">
        {/* Brand info */}
        <div className="flex flex-col gap-md">
          <div className="flex items-center gap-xs">
            <img
              src="/logo.jpg"
              alt="Cogniteck Logo"
              className="w-8 h-8 rounded-full object-cover border border-outline"
            />
            <span className="text-headline-md font-extrabold text-primary font-sans tracking-tight">
              Cogniteck
            </span>
          </div>
          <p className="text-body-md text-on-surface-variant font-sans leading-relaxed">
            Software y páginas web a medida para pequeños negocios, profesionales y emprendedores.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-sm">
          <p className="text-label-sm uppercase tracking-wider text-secondary font-bold font-sans">
            Navegación
          </p>
          <nav className="flex flex-col gap-xs font-sans">
            <a
              className="text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
              href="#how-we-work"
            >
              Cómo trabajamos
            </a>
            <a
              className="text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
              href="#services"
            >
              Nuestros servicios
            </a>
            <a
              className="text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
              href="#who-we-are"
            >
              Quiénes somos
            </a>
          </nav>
        </div>

        {/* Copyright info */}
        <div className="flex flex-col justify-end items-start md:items-end">
          <p className="text-body-md text-on-surface-variant font-sans text-left md:text-right leading-relaxed">
            © {new Date().getFullYear()} Cogniteck.<br />
            Soluciones prácticas para negocios reales.
          </p>
        </div>
      </div>
    </footer>
  );
}
