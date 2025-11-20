import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Why Choose OneGate?</h2>
                        <p>
                            We believe in the power of personalization. Whether you're a small business looking to brand your uniforms,
                            an artist wanting to sell your designs on patches, or just someone who wants a unique t-shirt, we've got you covered.
                        </p>
                        <ul className="feature-list">
                            <li>✓ Premium Quality Materials</li>
                            <li>✓ No Minimum Order Quantity</li>
                            <li>✓ Fast Turnaround Times</li>
                            <li>✓ Expert Design Support</li>
                        </ul>
                    </div>
                    <div className="about-image">
                        <img src="/src/assets/images/workshop.png" alt="Custom Apparel Workshop" className="about-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
