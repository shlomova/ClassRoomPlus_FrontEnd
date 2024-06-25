import React from 'react';
import './CourseImageModal.css'; // Create and import CSS for the modal

const CourseImageModal = ({ courseImages, onSelect, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Select a Course Image</h2>
                <div className="image-grid">
                    {courseImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Course ${index + 1}`}
                            className="course-image"
                            onClick={() => onSelect(image)}
                        />
                    ))}
                </div>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default CourseImageModal;
