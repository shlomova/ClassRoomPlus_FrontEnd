import React, { useState } from 'react';
import axios from 'axios';
import './addCourse.css';
import UtilsCheckUserAndToken from '../../../utils/utilsCheckUserAndToken';

const AddCourse = ({ onClose, userId }) => {
    const checkUserAndToken = UtilsCheckUserAndToken();
    console.log(userId);
    const [file, setFile] = useState(null);
    const [courseData, setCourseData] = useState({
        courseName: '',
        openDate: '',
        endDate: '',
        description: '',
        price: '',
        userId: userId
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData({
            ...courseData,
            [name]: value
        });
    };

    const handleImageUpload = async () => {
        if (!file) return '';
        const formData = new FormData();
        formData.append('file', file);
        try {
            const response = await axios.post('http://localhost:3000/courses/img', formData, { withCredentials: true });
            return response.data.url;
        } catch (error) {
            console.error('Error uploading image:', error);
            return '';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const imageUrl = await handleImageUpload();
        if (!imageUrl) {
            alert('Failed to upload image. Please try again.');
            return;
        }

        const courseDataWithImage = {
            ...courseData,
            courseimg: imageUrl
        };

        try {
            const response = await axios.post('http://localhost:3000/courses', courseDataWithImage, { withCredentials: true });
            console.log(response.data);
            onClose();
            window.location.reload();
        } catch (error) {
            console.error('Error creating course:', error);
        }
    };

    return (
        <div className="add-course-modal">
            <div className="add-course-container">
                <button className="close-button" onClick={onClose}>X</button>
                <form className="add-course-form" onSubmit={handleSubmit}>
                    <h2 className="add-course-title">Create a New Course</h2>
                    <label className="add-course-label">Course Name:</label>
                    <input className="add-course-input" type="text" name="courseName" value={courseData.courseName} onChange={handleChange} required />

                    <label className="add-course-label">Course Image:</label>
                    <input
                        id="image-upload"
                        type="file"
                        name="courseimg"
                        onChange={(e) => setFile(e.target.files[0])}
                        required
                    />

                    <label className="add-course-label">Open Date:</label>
                    <input className="add-course-input" type="date" name="openDate" value={courseData.openDate} onChange={handleChange} required />

                    <label className="add-course-label">End Date:</label>
                    <input className="add-course-input" type="date" name="endDate" value={courseData.endDate} onChange={handleChange} required />

                    <label className="add-course-label">Description:</label>
                    <textarea className="add-course-input" name="description" value={courseData.description} onChange={handleChange} required></textarea>

                    <label className="add-course-label">Price:</label>
                    <input className="add-course-input" type="number" name="price" value={courseData.price} onChange={handleChange} required />

                    <button className="add-course-button" type="submit">Create Course</button>
                </form>
            </div>
        </div>
    );
};

export default AddCourse;
