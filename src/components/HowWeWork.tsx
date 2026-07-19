const cardStyle: React.CSSProperties = {
  background: '#fff',
  border: '1px solid #E2E4EC',
  borderRadius: 16,
  padding: 28,
};

const cardTitleStyle: React.CSSProperties = {
  font: "700 16px 'Instrument Sans', sans-serif",
  color: '#17172A',
  marginBottom: 8,
};

const cardBodyStyle: React.CSSProperties = {
  font: "400 14px/1.6 'Inter', sans-serif",
  color: '#5B5B70',
};

export default function HowWeWork() {
  return (
    <section style={{ padding: '72px 56px', maxWidth: 1180, margin: '0 auto' }}>
      <div className="row-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        <div style={cardStyle}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,14px)',
              gridTemplateRows: 'repeat(2,14px)',
              gap: 4,
              marginBottom: 18,
            }}
          >
            <div style={{ background: '#17172A', borderRadius: 3 }} />
            <div style={{ background: '#17172A', borderRadius: 3 }} />
            <div style={{ background: '#17172A', borderRadius: 3 }} />
            <div style={{ border: '2px solid #5B5FEF', borderRadius: 3 }} />
          </div>
          <div style={cardTitleStyle}>Producto, no proyecto</div>
          <div style={cardBodyStyle}>Cronos y cada solución futura se construyen una vez y evolucionan para todos los que las usan.</div>
        </div>

        <div style={cardStyle}>
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" style={{ marginBottom: 18 }}>
            <circle cx="14" cy="14" r="12" fill="none" stroke="#5B5FEF" strokeWidth="2" />
            <path d="M14 8V14L18 17" stroke="#5B5FEF" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div style={cardTitleStyle}>Implementación en días</div>
          <div style={cardBodyStyle}>Activas la solución y la adaptas a tu operación desde la primera semana.</div>
        </div>

        <div style={cardStyle}>
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" style={{ marginBottom: 18 }}>
            <circle cx="6" cy="6" r="4.5" fill="#EEF0FE" />
            <circle cx="22" cy="6" r="4.5" fill="#EEF0FE" />
            <circle cx="6" cy="22" r="4.5" fill="#EEF0FE" />
            <circle cx="22" cy="22" r="4.5" fill="none" stroke="#5B5FEF" strokeWidth="2" />
          </svg>
          <div style={cardTitleStyle}>Un sistema, muchas soluciones</div>
          <div style={cardBodyStyle}>Cada producto vive bajo la misma marca y comparte los mismos estándares de calidad y diseño.</div>
        </div>
      </div>
    </section>
  );
}
