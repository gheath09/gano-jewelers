import React from 'react';
import './Reviews.css'; // Assuming you have a CSS file for styles  

const Reviews = () => {
    const testimonials = [
        { quote: "Galina recreated my grandmother's ring perfectly! It's now a cherished piece I wear every day.", name: "Jessica T." },
        { quote: "I was thrilled with how quickly Galina sourced the Rolex I wanted. It was everything I hoped for!", name: "Michael R." },
        { quote: "The custom engagement ring Galina created for me was breathtaking. She truly captured my vision!", name: "Emma L." },
        { quote: "I couldn't believe how well Galina resized my antique ring. It fits perfectly and looks stunning!", name: "Daniel K." },
        { quote: "Galina's craftsmanship in my custom engagement ring was unparalleled; I get compliments all the time!", name: "Sophie H." },
        { quote: "The engraving on my resized heirloom piece is flawless. Galina's attention to detail is amazing!", name: "Ryan J." }
    ];

    return (
        <div className="reviews-container" style={{ backgroundColor: 'black', padding: '20px', color: 'gold' }}>
            <h2>Client Testimonials</h2>
            <div className="testimonials">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <p>“{testimonial.quote}”</p>
                        <p>- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;