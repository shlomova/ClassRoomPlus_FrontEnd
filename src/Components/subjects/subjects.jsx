import React, { useState } from 'react';
import CoursesList from '../courses-list/coursesList';
import axios from 'axios';

const Subjects = ({ courses, setCourses, categories }) => {
    const handleSelect = async (event) => {
        const { value } = event.target;
        try {
            const { data } = await axios.get(
                `http://localhost:3000/courses/${value == 'All' ? '' : value}`,
                { withCredentials: true });
            const res = data.courses
            setCourses(Array.isArray(res) ? res : [res]);
        } catch (error) {
            console.error("Error fetching course data:", error);
        }
    };

    return (
        <>
            <select onChange={handleSelect}>
                <option value="All">All</option>
                {categories.map((categorie) => (
                    <option key={categorie._id} value={categorie._id}>
                        {categorie.courseName}
                    </option>
                ))}
            </select>
            <div>
                <CoursesList courses={courses} />
            </div>
        </>
    );
};

export default Subjects;
