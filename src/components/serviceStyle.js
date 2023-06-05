import React from 'react';

export default function Box({children, color}) {
  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: '8px',
        border: '2px solid #4D5E75', 
        color: 'black',
        padding: '0.2rem',
        margin: '20px',
        width: '100%'
      }}>
      {children}
    </div>
  );
}