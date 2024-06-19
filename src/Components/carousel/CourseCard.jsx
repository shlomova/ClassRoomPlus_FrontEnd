// src/Components/course-card/CourseCard.jsx
import React from 'react';
import CourseItem from "../course-item/courseItem";


const CourseCard = ({ course }) => {
  return (
    <div className="col-md-4">
      <CourseItem
      id={course.userId}
      courseId={course._id}
      courseName={course.courseName}
      description={course.description}
        price={course.price}
      />

    </div>
  );
}

export default CourseCard;
