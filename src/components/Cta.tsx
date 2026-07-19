export default function Cta() {
  return (
    <section id="contacto" style={{ padding: '80px 56px', background: '#17172A', textAlign: 'center', marginTop: 24 }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <h2 style={{ font: "700 clamp(26px,3.4vw,38px)/1.2 'Instrument Sans', sans-serif", color: '#fff', letterSpacing: '-0.01em', margin: '0 0 16px' }}>
          ¿Listo para resolver tu operación con software real?
        </h2>
        <p style={{ font: "400 16px/1.6 'Inter', sans-serif", color: '#A6A6C0', margin: '0 0 32px' }}>
          Conversemos y te contamos cómo Cronos —y lo que viene después— resolverá tu operación.
        </p>
        <a
          href="mailto:hola@cogniteck.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            font: "600 14px 'Inter', sans-serif",
            letterSpacing: '0.02em',
            color: '#17172A',
            background: '#fff',
            padding: '16px 28px',
            borderRadius: 10,
            whiteSpace: 'nowrap',
          }}
        >
          SOLICITAR DEMO
        </a>
      </div>
    </section>
  );
}
