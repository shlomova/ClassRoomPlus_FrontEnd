import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewProfile.css';

const ViewProfile = ({ onClose }) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchUser = async () => {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            if (userInfo) {
                setUser(userInfo.data.user);
            }
        };
        fetchUser();
    }, []);

    return (
        <div className="view-profile-modal">
            <div className="view-profile-container">
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>Profile</h2>
                <div className="profile-field">
                    <strong>First Name:</strong> {user.firstName}
                </div>
                <div className="profile-field">
                    <strong>Last Name:</strong> {user.lastName}
                </div>
                <div className="profile-field">
                    <strong>Email:</strong> {user.email}
                </div>
                <div className="profile-field">
                    <strong>Phone:</strong> {user.phone}
                </div>
                <div className="profile-field">
                    <strong>Role:</strong> {user.role}
                </div>
                {user.avatar && (
                    <div className="profile-field">
                        <strong>Avatar:</strong>
                        <img src={user.avatar} alt="Avatar" className="avatar-image" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewProfile;
