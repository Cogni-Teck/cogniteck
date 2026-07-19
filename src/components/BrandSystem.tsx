import CronosMark from './CronosMark';

export default function BrandSystem() {
  return (
    <section style={{ padding: '72px 56px', maxWidth: 1180, margin: '0 auto' }}>
      <p style={{ font: "400 15.5px/1.6 'Inter', sans-serif", color: '#5B5B70', maxWidth: 680, margin: '0 0 32px' }}>
        cogniteck no es un solo producto: es una casa que sigue construyendo soluciones, una a la vez.
      </p>
      <div className="row-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        <div
          style={{
            background: '#fff',
            border: '1px solid #E2E4EC',
            borderRadius: 16,
            padding: '36px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,26px)',
              gridTemplateRows: 'repeat(2,26px)',
              gap: 7,
              marginBottom: 20,
            }}
          >
            <div style={{ background: '#17172A', borderRadius: 6 }} />
            <div style={{ background: '#17172A', borderRadius: 6 }} />
            <div style={{ background: '#17172A', borderRadius: 6 }} />
            <div style={{ border: '2.5px solid #5B5FEF', borderRadius: 6 }} />
          </div>
          <div style={{ font: "700 15px 'Instrument Sans', sans-serif", color: '#17172A', marginBottom: 6 }}>cogniteck</div>
          <div style={{ font: "600 10.5px 'JetBrains Mono', monospace", letterSpacing: '0.06em', color: '#5B5FEF', marginBottom: 14 }}>
            MARCA MADRE
          </div>
          <div style={{ font: "400 12.5px/1.6 'JetBrains Mono', monospace", color: '#8A8AA0' }}>
            La marca bajo la que crece cada solución que construimos.
          </div>
        </div>

        <div
          style={{
            background: '#fff',
            border: '1px solid #E2E4EC',
            borderRadius: 16,
            padding: '36px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div style={{ marginBottom: 20 }}>
            <CronosMark size={66} />
          </div>
          <div style={{ font: "700 15px 'Instrument Sans', sans-serif", color: '#17172A', marginBottom: 6 }}>cronos</div>
          <div style={{ font: "600 10.5px 'JetBrains Mono', monospace", letterSpacing: '0.06em', color: '#EE9050', marginBottom: 14 }}>
            PRIMERA SOLUCIÓN
          </div>
          <div style={{ font: "400 12.5px/1.6 'JetBrains Mono', monospace", color: '#8A8AA0' }}>
            La primera solución de la casa, en desarrollo activo.
          </div>
        </div>

        <div
          style={{
            background: '#fff',
            border: '1px dashed #D6D8E2',
            borderRadius: 16,
            padding: '36px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,26px)',
              gridTemplateRows: 'repeat(2,26px)',
              gap: 7,
              marginBottom: 20,
            }}
          >
            <div style={{ border: '2px dashed #D6D8E2', borderRadius: 6 }} />
            <div style={{ border: '2px dashed #D6D8E2', borderRadius: 6 }} />
            <div style={{ border: '2px dashed #D6D8E2', borderRadius: 6 }} />
            <div style={{ border: '2px dashed #D6D8E2', borderRadius: 6 }} />
          </div>
          <div style={{ font: "700 15px 'Instrument Sans', sans-serif", color: '#A6A6B8', marginBottom: 6 }}>
            próxima solución
          </div>
          <div style={{ font: "600 10.5px 'JetBrains Mono', monospace", letterSpacing: '0.06em', color: '#A6A6B8', marginBottom: 14 }}>
            EN DESARROLLO
          </div>
          <div style={{ font: "400 12.5px/1.6 'JetBrains Mono', monospace", color: '#A6A6B8' }}>
            La siguiente solución de la casa ya está en camino.
          </div>
        </div>
      </div>
    </section>
  );
}
