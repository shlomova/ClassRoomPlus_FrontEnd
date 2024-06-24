import React from 'react';
import CourseItem from "../course-item/courseItem";


const imageMapping = {
    1: "../../assets/1.jpg",
    2: "../../assets/2.jpg",
    3: "../../assets/3.jpg",
    4: "../../assets/4.jpg",
    5: "../../assets/5.jpg",

}

const CoursesList = ({ courses }) => {
    return (
        <div className="row">
            {courses.map(course => (
                <div className="col-md-4" key={course._id}>
                    <CourseItem
                        openDate={course.openDate}  
                        endDate={course.endDate}
                        // img={course.img}
                        id={course.userId}
                        courseName={course.courseName}
                        description={course.description}
                        price={course.price}
                        userId={course.userId}
                        courseId={course._id}
                        backgroundImage = {imageMapping[course._id]}
                        
                    />
                </div>
            ))}
        </div>
    );
};

export default CoursesList;
