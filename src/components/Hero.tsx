export default function Hero() {
  return (
    <section id="inicio" style={{ padding: '96px 56px 80px', maxWidth: 1180, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
        <h1
          style={{
            font: "700 clamp(34px,5.2vw,54px)/1.15 'Instrument Sans', sans-serif",
            color: '#17172A',
            letterSpacing: '-0.01em',
            margin: '0 0 22px',
          }}
        >
          Construimos software propio, pieza por pieza.
        </h1>
        <p style={{ font: "400 18px/1.65 'Inter', sans-serif", color: '#5B5B70', margin: '0 0 36px' }}>
          cogniteck es una casa de soluciones en construcción. Cronos es la primera pieza; las siguientes están en camino.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#contacto"
            style={{
              font: "600 14px 'Inter', sans-serif",
              letterSpacing: '0.02em',
              color: '#fff',
              background: '#17172A',
              padding: '16px 28px',
              borderRadius: 10,
              whiteSpace: 'nowrap',
            }}
          >
            SOLICITAR DEMO
          </a>
          <a
            href="#soluciones"
            style={{
              font: "600 14px 'Inter', sans-serif",
              letterSpacing: '0.02em',
              color: '#17172A',
              background: '#fff',
              border: '1px solid #E2E4EC',
              padding: '16px 28px',
              borderRadius: 10,
              whiteSpace: 'nowrap',
            }}
          >
            VER SOLUCIONES
          </a>
        </div>
      </div>
    </section>
  );
}
