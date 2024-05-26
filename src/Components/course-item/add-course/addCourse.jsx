import React, { useState } from 'react';
import './addCourse.css'
import axios from 'axios';

const AddCourse = ({ onClose, userId }) => {
    const [courseData, setCourseData] = useState({
        courseName: '',
        openDate: '',
        endDate: '',
        description: '',
        price: '',
        userId: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData({
            ...courseData,
            [name]: value
        });
        console.log(courseData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(courseData);
        try {
            const response = await axios.post('http://localhost:3000/courses', courseData, { withCredentials: true });
            console.log(response.data);
            onClose()
            window.location.reload()
        } catch (error) {
            console.error('Error creating course:', error);
        }
    };

    return (
        <>
            <div className="add-course-modal">
                <button className="close-button" onClick={onClose}>X</button>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Course Name:</label>
                        <input type="text" name="courseName" value={courseData.courseName} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Open Date:</label>
                        <input type="date" name="openDate" value={courseData.openDate} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>End Date:</label>
                        <input type="date" name="endDate" value={courseData.endDate} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea name="description" value={courseData.description} onChange={handleChange}></textarea>
                    </div>
                    <div>
                        <label>Price:</label>
                        <input type="number" name="price" value={courseData.price} onChange={handleChange} />
                    </div>
                    <div>
                        <label>User ID:</label>
                        <input id='userId' type="text" name="userId" value={userId} onChange={handleChange} required />
                    </div>
                    <button type="submit" id='CreateCourse'>Create Course</button>
                </form>
            </div>
        </>
    );
};

export default AddCourse;
