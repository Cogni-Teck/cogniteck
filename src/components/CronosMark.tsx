export default function CronosMark({
  size = 24,
  dotColor = '#17172A',
  ringColor = '#EE9050',
}: {
  size?: number;
  dotColor?: string;
  ringColor?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none">
      <circle cx="5" cy="5" r="3" fill={dotColor} />
      <circle cx="13" cy="5" r="3" fill={dotColor} />
      <circle cx="21" cy="5" r="3" fill={dotColor} />
      <circle cx="5" cy="13" r="3" fill={dotColor} />
      <circle cx="21" cy="13" r="3" fill="none" stroke={ringColor} strokeWidth="1.4" />
      <circle cx="5" cy="21" r="3" fill={dotColor} />
      <circle cx="13" cy="21" r="3" fill={dotColor} />
      <circle cx="21" cy="21" r="3" fill={dotColor} />
    </svg>
  );
}
