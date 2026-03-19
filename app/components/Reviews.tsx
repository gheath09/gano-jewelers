import React from 'react';
import './Reviews.css'; // Assuming you will create a separate CSS file for styling

const Reviews = () => {
    const testimonials = [
        { quote: "Absolutely loved the service! Highly recommend." },
        { quote: "The quality of the jewelry is exceptional!" },
        { quote: "Amazing experience, I will be back for more!" },
        { quote: "Beautiful designs and great customer service." },
        { quote: "My go-to place for all jewelry needs!" },
    ];

    return (
        <div className="reviews-container">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial">
                    <p className="quote">{testimonial.quote}</p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;