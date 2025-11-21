export default function HumidityIcon({size = 32}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0C19 10 12 2 12 2z"/>
        <ellipse cx="12" cy="17" rx="4" ry="3" fill="#fff"/>
      </g>
    </svg>
  );
}