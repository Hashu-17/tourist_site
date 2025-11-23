export default function RainIcon({size = 64}) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="22" rx="14" ry="8" fill="#fff"/>
      <path d="M16 34c0 2 2 4 4 4s4-2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      <path d="M28 34c0 2 2 4 4 4s4-2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      <line x1="18" y1="38" x2="18" y2="44" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      <line x1="30" y1="38" x2="30" y2="44" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}