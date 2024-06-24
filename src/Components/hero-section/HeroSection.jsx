import React from 'react'   


const HeroSection = () => {
    return (
        <section className="hero-section">
            <div id='hero-contaoner' className="hero-section__container ">
                <h1 className="hero-section__title">Welcome to our online school</h1>
                <p className="hero-section__description">Learn from the best teachers in the world</p>
                <div className="search ">
                <input id="search-hero" type="text" placeholder="Search..." className="search-input" />
            </div>
                <button className="hero-section__cta">Start learning now</button>
            </div>
        </section>
    )

}
export default HeroSection