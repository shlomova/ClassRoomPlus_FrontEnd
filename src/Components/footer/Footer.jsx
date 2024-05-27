import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section company-info">
                <h2 className="company-name">Company Name</h2>
                <p>&copy; 2024 Company Name. All rights reserved.</p>
            </div>
            <nav className="footer-section nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </nav>
            <div className="footer-section social-media">
                <a href="https://facebook.com" className="social-link">Facebook</a>
                <a href="https://twitter.com" className="social-link">Twitter</a>
                <a href="https://instagram.com" className="social-link">Instagram</a>
            </div>
            <div className="footer-section contact-info">
                <p>Email: info@company.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </footer>
    );
};

export default Footer;
