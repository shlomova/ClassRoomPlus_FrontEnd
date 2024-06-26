import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ showLinks, showPartLinks }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const avatar = JSON.parse(localStorage.getItem('avatar'));
    console.log(avatar);
    
    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            const user = JSON.parse(userInfo).data.user;
            if (user.role === 'admin') {
                setIsAdmin(true);
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        window.location.href = '/';
    };

    const handleSelectChange = (e) => {
        if (e.target.value === 'logout') {
            handleLogout();
        } else {
            window.location.href = e.target.value;
        }
    };

    return (
        <header className="d-flex flex-row justify-content-between align-items-center sticky-top bg-dark text-white p-3" style={{ height: '60px' }}>
            <div className="d-flex align-items-center">
                <img src="src/assets/logo1.jpg" alt="Site Logo" className="logo-image" />
                <h1 className="fs-4">Class Room +</h1>
            </div>
            {showLinks && !isAdmin && (
                <nav>
                    <ul className="d-flex list-unstyled mb-0">
                        <img className='friendimg' src={avatar} alt='avatar' />
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link text-white px-3">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-white px-3">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/App" className="nav-link text-white px-3">Courses</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <select className="nav-link bg-dark text-white px-3" id="navbarDropdown" onChange={handleSelectChange}>
                                <option value="" selected disabled>Account</option>
                                <option value="/profile">View Profile</option>
                                <option value="/edit-profile">Edit Profile</option>
                                <option value="/change-password">Change Password</option>
                                <option value="logout">Logout</option>
                            </select>
                        </li>
                    </ul>
                </nav>
            )}
            {showPartLinks && !isAdmin &&(
                <nav>
                    <ul className="d-flex list-unstyled mb-0 w-100">
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link text-white px-3">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-white px-3">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <select className="nav-link bg-dark text-white px-3" id="navbarDropdown" onChange={handleSelectChange}>
                                <option value="#" selected disabled>Account</option>
                                <option value="/profile">View Profile</option>
                                <option value="/edit-profile">Edit Profile</option>
                                <option value="/change-password">Change Password</option>
                                <option value="logout">Logout</option>
                            </select>
                        </li>
                    </ul>
                </nav>
            )}
            {isAdmin && (
                <nav>
                    <ul className="d-flex list-unstyled mb-0">
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link text-white px-3">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-white px-3">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/App" className="nav-link text-white px-3">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link text-white px-3">Admin</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <select className="nav-link bg-dark text-white px-3" id="navbarDropdown" onChange={handleSelectChange}>
                                <option value="#" selected disabled>Account</option>
                                <option value="/profile">View Profile</option>
                                <option value="/edit-profile">Edit Profile</option>
                                <option value="/change-password">Change Password</option>
                                <option value="logout">Logout</option>
                            </select>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

Header.propTypes = {
    showLinks: PropTypes.bool.isRequired,
    showPartLinks: PropTypes.bool
};

export default Header;
