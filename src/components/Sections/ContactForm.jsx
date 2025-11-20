import React, { useState } from 'react';
import Button from '../UI/Button';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset status after showing success message
            setTimeout(() => {
                setStatus('idle');
            }, 3000);
        }, 1500);
    };

    return (
        <div className="contact-form-container">
            {status === 'success' ? (
                <div className="success-message">
                    <div className="success-icon">✨</div>
                    <h3>Message Sent!</h3>
                    <p>Thanks for reaching out. We'll get back to you at business@onegate.in shortly.</p>
                </div>
            ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select a topic</option>
                            <option value="Custom Order">Custom Order</option>
                            <option value="Bulk Inquiry">Bulk Inquiry</option>
                            <option value="General Question">General Question</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Tell us about your project..."
                            rows="5"
                        ></textarea>
                    </div>

                    <Button
                        type="submit"
                        className={`submit-btn ${status === 'submitting' ? 'loading' : ''}`}
                        disabled={status === 'submitting'}
                    >
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
