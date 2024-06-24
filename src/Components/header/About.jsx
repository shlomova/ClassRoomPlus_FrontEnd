// a nice about page for the website
import React from 'react';
const About = () => {
    return (
        <section className="about-section">
            <div className="about-section__container">
                <h1 className="about-section__title">About Us</h1>
                <p className="about-section__description">We are a team of developers who are passionate about creating a platform that will help students learn from the best teachers in the world. Our goal is to provide quality education to students who are eager to learn.</p>
                <div className="about-section__socials">
                    {/* <Link to="/" className="about-section__social"><FaFacebook /></Link>
                    <Link to="/" className="about-section__social"><FaTwitter /></Link>
                    <Link to="/" className="about-section__social"><FaInstagram /></Link>
                    <Link to="/" className="about-section__social"><FaLinkedin /></Link> */}
                </div>
            </div>
        </section>
    )
}


export default About