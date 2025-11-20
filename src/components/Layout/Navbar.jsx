import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo-container">
                    <img src={logo} alt="OneGate Logo" className="nav-logo" />
                    <span className="logo-text">OneGate</span>
                </div>

                <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
                </button>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a onClick={() => scrollToSection('home')}>Home</a>
                    <a onClick={() => scrollToSection('services')}>Services</a>
                    <a onClick={() => scrollToSection('about')}>About</a>
                    <a onClick={() => scrollToSection('contact')}>Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
