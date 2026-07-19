import CogniteckMark from './CogniteckMark';

export default function Navbar() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 56px',
        background: 'rgba(238,240,244,0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #E2E4EC',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <CogniteckMark size={24} />
        <span
          className="navbar-logo-text"
          style={{ font: "700 18px 'Instrument Sans', sans-serif", color: '#17172A', letterSpacing: '-0.01em' }}
        >
          cogniteck
        </span>
      </div>

      <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        <a href="#inicio" style={{ font: "500 13.5px 'Inter', sans-serif", color: '#17172A' }}>Inicio</a>
        <a href="#soluciones" style={{ font: "500 13.5px 'Inter', sans-serif", color: '#17172A' }}>Soluciones</a>
        <a href="#nosotros" style={{ font: "500 13.5px 'Inter', sans-serif", color: '#17172A' }}>Nosotros</a>
        <a href="#contacto" style={{ font: "500 13.5px 'Inter', sans-serif", color: '#17172A' }}>Contacto</a>
      </nav>

      <a
        href="#contacto"
        className="navbar-cta"
        style={{
          font: "600 12.5px 'Inter', sans-serif",
          letterSpacing: '0.02em',
          color: '#fff',
          background: '#17172A',
          padding: '11px 20px',
          borderRadius: 9,
          whiteSpace: 'nowrap',
        }}
      >
        Solicitar demo
      </a>
    </header>
  );
}
