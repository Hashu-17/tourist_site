export default function TemperatureIcon({size = 32}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="2" width="6" height="12" rx="3"/>
        <line x1="12" y1="14" x2="12" y2="22"/>
        <circle cx="12" cy="19" r="3" fill="#fff"/>
      </g>
    </svg>
  );
}