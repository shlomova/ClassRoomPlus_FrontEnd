import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditProfile.css';

const EditProfile = ({ onClose }) => {
    const [user, setUser] = useState({});
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [avatar, setAvatar] = useState('');
    const [error, setError] = useState('');

    const avatars = [
        'src/assets/avatars/avatar_1.jpg',
        'src/assets/avatars/avatar_2.jpg',
        'src/assets/avatars/avatar_3.jpg',
        'src/assets/avatars/avatar_4.jpg',
    ];

    useEffect(() => {
        const fetchUser = async () => {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            if (userInfo) {
                setUser(userInfo);
                setFirstName(userInfo.firstName);
                setLastName(userInfo.lastName);
                setAvatar(userInfo.avatar);
            }
        };
        fetchUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const updatedUser = {
                firstName,
                lastName,
                avatar,
                ...(password && { password })
            };
            const response = await axios.put(`http://localhost:3000/users/${user._id}`, updatedUser);
            localStorage.setItem('userInfo', JSON.stringify(response.data));
            alert('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error.response?.data || error.message);
        }
    };

    const handleAvatarClick = (selectedAvatar) => {
        setAvatar(selectedAvatar);
    };

    return (
        <div className="maincontainer1">
            <div className="edit-profile-container">
                <button className="close-button" onClick={onClose}>×</button>
                <h2 className="edit-profile-title">Edit Profile</h2>
                <form className="edit-profile-form" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="edit-profile-label">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            className="edit-profile-input"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="edit-profile-label">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            className="edit-profile-input"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="edit-profile-label">New Password</label>
                        <input
                            type="password"
                            id="password"
                            className="edit-profile-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="edit-profile-label">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="edit-profile-input"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {error && <div className="error-message">{error}</div>}
                    </div>
                    <div className="avatar-selection">
                        {avatars.map((avatarUrl, index) => (
                            <img
                                key={index}
                                src={avatarUrl}
                                alt={`avatar-${index + 1}`}
                                className={avatar === avatarUrl ? 'selected' : ''}
                                onClick={() => handleAvatarClick(avatarUrl)}
                            />
                        ))}
                    </div>
                    <button type="submit" className="edit-profile-button">Update Profile</button>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
