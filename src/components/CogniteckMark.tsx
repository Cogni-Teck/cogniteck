export default function CogniteckMark({
  size = 24,
  fillColor = '#17172A',
  accentColor = '#5B5FEF',
}: {
  size?: number;
  fillColor?: string;
  accentColor?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
      <rect x="0" y="0" width="12" height="12" rx="3" fill={fillColor} />
      <rect x="18" y="0" width="12" height="12" rx="3" fill={fillColor} />
      <rect x="0" y="18" width="12" height="12" rx="3" fill={fillColor} />
      <rect x="18.5" y="18.5" width="11" height="11" rx="2.5" fill="none" stroke={accentColor} strokeWidth="2.4" />
    </svg>
  );
}
