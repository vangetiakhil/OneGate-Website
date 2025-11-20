import React from 'react';
import Button from '../UI/Button';
import './Hero.css';

const Hero = ({ onCtaClick }) => {
    return (
        <section className="hero-section" id="home">
            <div className="hero-content">
                <h1 className="hero-title">
                    Custom Iron On Patches <br />
                    <span className="highlight">& Apparel</span>
                </h1>
                <p className="hero-subtitle">
                    Premium quality custom printing and embroidery for your brand, team, or personal style.
                    No minimums, fast turnaround.
                </p>
                <div className="hero-actions">
                    <Button onClick={onCtaClick}>Get Started</Button>
                    <Button variant="secondary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
                        View Products
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
