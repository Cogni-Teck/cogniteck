const founders = ['Lennard', 'Alen', 'Carlos'];

export default function About() {
  return (
    <section id="nosotros" style={{ padding: '72px 56px', maxWidth: 1180, margin: '0 auto' }}>
      <div style={{ background: '#fff', border: '1px solid #E2E4EC', borderRadius: 16, padding: 40 }}>
        <p style={{ font: "400 16px/1.7 'Inter', sans-serif", color: '#5B5B70', maxWidth: 680, margin: '0 0 36px' }}>
          cogniteck es la casa de soluciones fundada por Lennard, Alen y Carlos. Diseñamos y construimos productos de software listos para resolver problemas reales de operación, empezando por Cronos.
        </p>
        <div className="row-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {founders.map((name) => (
            <div key={name}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: '#EEF0FE',
                  color: '#5B5FEF',
                  font: "700 17px 'Instrument Sans', sans-serif",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 14,
                }}
              >
                {name.charAt(0)}
              </div>
              <div style={{ font: "700 15px 'Instrument Sans', sans-serif", color: '#17172A', marginBottom: 3 }}>{name}</div>
              <div style={{ font: "500 12.5px 'Inter', sans-serif", color: '#8A8AA0' }}>Cofundador</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
