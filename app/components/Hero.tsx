import React from 'react';

const Hero = () => {
    return (
        <div style={{
            backgroundColor: 'black',
            color: 'gold',
            padding: '20px',
            textAlign: 'center',
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <h1>Your Personal Jeweler</h1>
            <h2>Custom pieces. Sourced diamonds. Designed around you.</h2>
            <img src='https://source.unsplash.com/featured/?ring' alt='Ring' style={{ width: '300px', height: 'auto', border: '2px solid gold', marginTop: '20px' }} />
        </div>
    );
};

export default Hero;