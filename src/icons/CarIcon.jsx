export default function CarIcon({size = 32}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="5" rx="2" fill="#fff"/>
        <rect x="5" y="7" width="14" height="6" rx="2"/>
        <circle cx="7" cy="18" r="2" fill="#fff"/>
        <circle cx="17" cy="18" r="2" fill="#fff"/>
      </g>
    </svg>
  );
}