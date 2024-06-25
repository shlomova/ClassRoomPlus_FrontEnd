import React from 'react';
import './AvatarModal.css'; // Create and import CSS for the modal

const AvatarModal = ({ avatars, onSelect, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Select an Avatar</h2>
                <div className="avatar-grid">
                    {avatars.map((avatar, index) => (
                        <img
                            key={index}
                            src={avatar}
                            alt={`avatar${index + 1}`}
                            className="avatar-image"
                            onClick={() => onSelect(avatar)}
                        />
                    ))}
                </div>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default AvatarModal;

