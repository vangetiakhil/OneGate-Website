import React from 'react';
import ContactForm from './ContactForm';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2>Ready to Start Your Order?</h2>
                        <p>
                            Whether you need 50 patches or 500 t-shirts, we're here to help.
                            Fill out the form and we'll get back to you with a quote.
                        </p>
                        <div className="info-item">
                            <span className="icon">📧</span>
                            <a href="mailto:business@onegate.in">business@onegate.in</a>
                        </div>
                    </div>
                    <div className="contact-form-wrapper">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
