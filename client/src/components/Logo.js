import React from 'react';

const Logo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg 
        width="28" 
        height="28" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        style={{ color: "var(--primary)" }}
      >
        <path d="M9.5 2c-1.38 0-2.5 1.12-2.5 2.5 0 .28.05.54.14.79C5.39 5.86 4 7.6 4 9.5 4 11.99 6.01 14 8.5 14c.26 0 .52-.03.77-.08.62 1.25 1.94 2.08 3.48 2.08.6 0 1.17-.14 1.68-.39.81.98 2.04 1.64 3.42 1.64 2.49 0 4.5-2.01 4.5-4.5 0-1.07-.37-2.05-1.01-2.82.35-.61.56-1.33.56-2.08 0-2.49-2.01-4.5-4.5-4.5-.68 0-1.32.16-1.89.43C14.76 2.65 13.5 2 12 2c-.93 0-1.79.31-2.5 1z" />
        <path d="M12 2v20" />
        <path d="M8 12l2-2 2 2 3-3" strokeWidth="1.5"/>
      </svg>
      <span style={{ 
        fontFamily: "'Inter', 'Poppins', sans-serif", 
        fontWeight: 600, 
        color: "var(--primary)", 
        fontSize: '1.25rem',
        letterSpacing: '-0.02em'
      }}>
        SalesMind AI
      </span>
    </div>
  );
};

export default Logo;
