import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>OneGate</h3>
                    <p>Premium Custom Apparel & Patches</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Shop</h4>
                        <a href="#services">Patches</a>
                        <a href="#services">Apparel</a>
                        <a href="#services">Bulk Orders</a>
                    </div>
                    <div className="link-group">
                        <h4>Company</h4>
                        <a href="#about">About Us</a>
                        <a href="#contact">Contact</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} OneGate. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
