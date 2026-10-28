export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: '24px', flexShrink: 0 }}
    >
      {/* Dark green background with rounded corners */}
      <rect width="100" height="100" rx="24" fill="#0f2418" />
      
      {/* Orange code brackets */}
      <path d="M 32 38 L 20 50 L 32 62" stroke="#f5a623" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M 68 38 L 80 50 L 68 62" stroke="#f5a623" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* White central "M" representing code and learning */}
      <path d="M 35 65 L 35 35 L 50 52 L 65 35 L 65 65" stroke="#ffffff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}