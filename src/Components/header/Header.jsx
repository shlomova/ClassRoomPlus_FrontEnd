import React from 'react';

const Header = () => {
    return (
        <header className="d-flex flex-row justify-content-around align-items-center sticky-top bg-dark text-white fs-4">
            <div className="me-auto d-flex flex-row ">
                <img src="./../../img/logo.png" alt="Site Logo" className="logo-image" />
                <h1 className="ms-5">Class Room +</h1>
            </div>
            <nav className=" nav">
                <ul className="d-flex flex-row">
                    <li className="nav-item"><a href="/dashboard" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="/App" className="nav-link">Courses</a></li>
                    {/* this is a link to ether login or singup */}
                    <li id="Profile" className="nav-item"><a href="/Login" className="nav-link">Profile</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
