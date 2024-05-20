import React, { useState } from 'react';
import axios from 'axios';

const CreateCourseForm = () => {
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
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/courses', courseData);
            console.log(response.data);
            alert('Course created successfully');
        } catch (error) {
            console.error('Error creating course:', error);
            alert('Failed to create course');
        }
    };

    return (
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
                <input type="text" name="userId" value={courseData.userId} onChange={handleChange} required />
            </div>
            <button type="submit">Create Course</button>
        </form>
    );
};

export default CreateCourseForm;
