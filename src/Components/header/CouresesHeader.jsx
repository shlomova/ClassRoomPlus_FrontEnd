import React from "react";
import CourseItem from "../course-item/courseItem";
import axios from "axios";
import { useEffect, useState } from "react";






const CouresesHeader = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('http://localhost:3000/courses');
                setCourses(data.courses);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])




    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Courses</h1>
                </div>
            </div>
            <div className="row">
                {courses.map((course) => {
                    return (
                        <div className="col-3">
                            <CourseItem
                                key={course._id}
                                id={course._id}
                                courseName={course.courseName}
                                description={course.description}
                                price={course.price}
                                openDate={course.openDate}
                                endDate={course.endDate}
                                userId={course.userId}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
       
    )
}



export default CouresesHeader;
