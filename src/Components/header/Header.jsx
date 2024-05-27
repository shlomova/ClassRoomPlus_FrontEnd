import React from 'react';
import './Header.css'; // Ensure you have the corresponding CSS file

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="logo.png" alt="Site Logo" className="logo-image" />
                <h1 className="site-name">Site Name</h1>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </nav>
            <div className="search">
                <input type="text" placeholder="Search..." className="search-input" />
            </div>
        </header>
    );
};

export default Header;
