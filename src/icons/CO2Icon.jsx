export default function CO2Icon({size = 32}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="7" ry="5" fill="#fff"/>
        <text x="12" y="16" textAnchor="middle" fontSize="7" fill="#111">CO₂</text>
      </g>
    </svg>
  );
}