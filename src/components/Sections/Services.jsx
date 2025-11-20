import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Iron On Patches",
            description: "High-quality embroidered and woven patches with durable iron-on backing. Perfect for jackets, bags, and hats.",
            icon: "🧵"
        },
        {
            title: "Custom T-Shirts",
            description: "Premium cotton tees with your custom designs. Direct-to-garment printing for vibrant, long-lasting colors.",
            icon: "👕"
        },
        {
            title: "Hoodies & Sweatshirts",
            description: "Cozy, high-quality apparel customized for your team or brand. Available in various colors and styles.",
            icon: "🧥"
        },
        {
            title: "Bulk Orders",
            description: "Special pricing for large orders. Ideal for corporate events, schools, and merchandise resale.",
            icon: "📦"
        }
    ];

    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="section-header">
                    <h2>Our Products</h2>
                    <p>Quality craftsmanship for all your custom apparel needs</p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
