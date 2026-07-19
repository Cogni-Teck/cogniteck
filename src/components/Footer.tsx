import CogniteckMark from './CogniteckMark';

export default function Footer() {
  return (
    <footer
      style={{
        padding: '36px 56px',
        background: '#17172A',
        borderTop: '1px solid #2A2A3D',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <CogniteckMark size={19} fillColor="#fff" />
        <span style={{ font: "700 14px 'Instrument Sans', sans-serif", color: '#fff' }}>cogniteck</span>
      </div>
      <div style={{ font: "400 12px 'Inter', sans-serif", color: '#7A7A93' }}>
        © {new Date().getFullYear()} cogniteck. Casa de soluciones de software.
      </div>
    </footer>
  );
}
