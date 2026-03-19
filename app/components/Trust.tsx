import React from 'react';

const Trust = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '20px',
    }}>
      <h1 style={{
        fontSize: '2em',
        color: '#333',
      }}>Our Commitment to You</h1>
      <p style={{
        fontSize: '1.2em',
        color: '#555',
        textAlign: 'center',
        maxWidth: '600px',
      }}>
        At Gano Jewelers, we emphasize a direct relationship with each of our clients. Our focus is on a no-pressure sales environment, where we source high-end jewelry pieces tailored to your individual style. Experience a personal approach to jewelry shopping that embodies luxury minimal design. We believe each piece should tell a story and reflect your unique taste.
      </p>
    </div>
  );
};

export default Trust;