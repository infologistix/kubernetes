import React from 'react';

export default function Box({children, color}) {
  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: '8px',
        border: '1px solid #6CA8B7', 
        padding: '0.2rem',
        margin: '20px',
        width: '100%'
      }}>
      {children}
    </div>
  );
}