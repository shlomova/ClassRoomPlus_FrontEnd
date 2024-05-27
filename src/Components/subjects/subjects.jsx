import React, {useEffect, useState} from 'react';
import CoursesList from '../courses-list/coursesList';
import axios from 'axios';
import Update from '../upDate/upDate';
import Delete from '../delete/delete';
import UtilsCheckUserAndToken from "../../utils/utilsCheckUserAndToken.jsx";
import AddCourse from "../course-item/add-course/addCourse.jsx";

const Subjects = () => {
    const [addCourse, setAddCourse] = useState(false)
    const [courses, setCourses] = useState([])
    const [categories, setCategories] = useState([])
    const [userId, setUserId] = useState('')
    const checkUserAndToken = UtilsCheckUserAndToken()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('http://localhost:3000/courses');
                setCourses(data.courses);
                setCategories(data.courses)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])

    useEffect(() => {
        const data = checkUserAndToken();
        if (data) {
            setUserId(`${data.user._id}`);
        }
    }, [])
    const handleButton = () => {
        setAddCourse(!addCourse)
    }
    const handleClose = () => {
        setAddCourse(false);
    };

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
                <div>
                    <Delete
                    categories={categories}
                    />
                </div>
            </div>
            <div>
                <CoursesList courses={courses} />
            </div>
            <button id='AppButton' onClick={handleButton}> To add a new course</button>
            {addCourse && (
                <AddCourse onClose={handleClose} userId={userId}/>
            )}
        </>
    );
};

export default Subjects;
