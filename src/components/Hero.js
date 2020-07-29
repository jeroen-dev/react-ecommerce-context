import React from 'react';

export default function Hero({ children }) {
  return (
    <div className='hero'>
      <div className='banner'>
        <h1>Save water,</h1>
        <p>Drink Wine!</p>
        {children}
      </div>
    </div>
  );
}
