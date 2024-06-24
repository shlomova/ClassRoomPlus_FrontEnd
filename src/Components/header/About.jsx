import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Header from './Header'
import './about.css';

const About = () => {
    return (
        <><div>
            <Header showLinks={true} />
        </div><section className="about-section py-5 bg-light text-center">
                <div className="container">
                    <h1 className="about-section__title text-4xl font-bold mb-4">About Us</h1>
                    <p className="about-section__description text-lg leading-relaxed mb-6">
                        We are a team of developers who are passionate about creating a platform that will help students learn from the best teachers in the world. Our goal is to provide quality education to students who are eager to learn.
                    </p>
                    <div className="about-section__socials flex justify-center space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="about-section__social text-dark hover:text-blue-500"><FaFacebook /></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="about-section__social text-dark hover:text-blue-500"><FaTwitter /></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="about-section__social text-dark hover:text-blue-500"><FaInstagram /></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="about-section__social text-dark hover:text-blue-500"><FaLinkedin /></a>
                    </div>
                </div>
            </section></>
    );
};

export default About;
