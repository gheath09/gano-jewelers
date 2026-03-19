import React from 'react';
import { Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <h1>Your Personal Jeweler</h1>
            <p>If you have any questions or need assistance, feel free to reach out!</p>
            <div style={{ margin: '20px 0' }}>
                <Button variant="primary" style={{ marginRight: '10px' }} onClick={() => window.location.href = 'tel:+1234567890'}>
                    Call Us
                </Button>
                <Button variant="success" onClick={() => window.location.href = 'sms:+1234567890'}>
                    Text Us
                </Button>
            </div>
            <p>Email: <a href="mailto:contact@ganojewelers.com">contact@ganojewelers.com</a></p>
        </div>
    );
};

export default Contact;