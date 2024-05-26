import React, { useState } from 'react';
import CoursesList from '../courses-list/coursesList';
import axios from 'axios';
import Update from '../upDate/upDate';

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
            <div className='d-flex  mb-3'>
                <div className='mr-5'>
                     Choose a topic
                     </div>
                     <div className=' mr-7'>
                <select onChange={handleSelect}>
                    <option value="All">All</option>
                    {categories.map((categorie) => (
                        <option key={categorie._id} value={categorie._id}>
                            {categorie.courseName}
                        </option>
                    ))} 
                </select>
                </div>
                <div> 
                    <Update
                        categories={categories}
                    />
                </div>
            </div>
            <div>
                <CoursesList courses={courses} />
            </div>
        </>
    );
};

export default Subjects;
