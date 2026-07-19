import CronosMark from './CronosMark';

function ComingSoonCard({ description }: { description: string }) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1.5px dashed #D6D8E2',
        borderRadius: 16,
        padding: 30,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2,22px)',
          gridTemplateRows: 'repeat(2,22px)',
          gap: 5,
          marginBottom: 18,
        }}
      >
        <div style={{ border: '2px dashed #D6D8E2', borderRadius: 5 }} />
        <div style={{ border: '2px dashed #D6D8E2', borderRadius: 5 }} />
        <div style={{ border: '2px dashed #D6D8E2', borderRadius: 5 }} />
        <div style={{ border: '2px dashed #D6D8E2', borderRadius: 5 }} />
      </div>
      <div style={{ font: "700 16px 'Instrument Sans', sans-serif", color: '#8A8AA0', marginBottom: 10 }}>
        Solución en desarrollo
      </div>
      <div style={{ font: "400 13.5px/1.6 'Inter', sans-serif", color: '#A6A6B8', flex: 1 }}>{description}</div>
      <div style={{ font: "600 11px 'JetBrains Mono', monospace", color: '#A6A6B8', letterSpacing: '0.06em', marginTop: 18 }}>
        PRÓXIMAMENTE
      </div>
    </div>
  );
}

export default function Solutions() {
  return (
    <section id="soluciones" style={{ padding: '72px 56px', maxWidth: 1180, margin: '0 auto' }}>
      <p style={{ font: "400 15.5px/1.6 'Inter', sans-serif", color: '#5B5B70', maxWidth: 680, margin: '0 0 32px' }}>
        Cronos es nuestra primera solución, hoy en desarrollo. Las que vienen después seguirán el mismo estándar de diseño y calidad.
      </p>

      <div className="sol-row" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr 0.85fr', gap: 20 }}>
        <div style={{ background: '#17172A', borderRadius: 16, padding: 32, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <CronosMark size={28} dotColor="#fff" />
            <div style={{ font: "700 19px 'Instrument Sans', sans-serif", color: '#fff' }}>cronos</div>
            <div
              style={{
                font: "600 10.5px 'JetBrains Mono', monospace",
                color: '#EE9050',
                background: 'rgba(238,144,80,0.14)',
                border: '1px solid rgba(238,144,80,0.35)',
                padding: '4px 10px',
                borderRadius: 20,
                marginLeft: 'auto',
              }}
            >
              EN DESARROLLO
            </div>
          </div>

          <div style={{ font: "400 14.5px/1.6 'Inter', sans-serif", color: '#B9B9CC', marginBottom: 22, flex: 1 }}>
            Control de asistencia y presencia en tiempo real. Reemplaza el registro manual con una grilla viva que muestra quién está presente, tarde o ausente al instante.
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 24 }}>
            {[
              'Registro en vivo, sin hardware adicional',
              'Estados claros: presente, tarde, ausente',
              'Integraciones vía API',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 9, font: "400 13px 'Inter', sans-serif", color: '#D6D6E4' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#17C778', display: 'inline-block' }} />
                {item}
              </div>
            ))}
          </div>

          <a
            href="#contacto"
            style={{
              font: "600 13px 'Inter', sans-serif",
              color: '#17172A',
              background: '#fff',
              padding: '12px 20px',
              borderRadius: 9,
              textAlign: 'center',
            }}
          >
            CONOCER CRONOS →
          </a>
        </div>

        <ComingSoonCard description="Otra solución de la casa cogniteck está en camino. Pronto contamos más." />
        <ComingSoonCard description="Seguimos construyendo: cada solución nueva resuelve un problema distinto de tu operación." />
      </div>
    </section>
  );
}
