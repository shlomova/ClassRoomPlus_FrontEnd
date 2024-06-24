import React from 'react';
import CourseItem from "../course-item/courseItem";

const CoursesList = ({ courses }) => {
  return (
<div className="container">
    <div className="row">
      {
        courses.map((course) => {
                const openDate = new Date(course.openDate);
                const endDate = new Date(course.endDate);
                return(
            <div className="col-md-4" key={course._id}>
              <CourseItem
                openDate={openDate.toISOString().split('T')[0]}  
                endDate={endDate.toISOString().split('T')[0]}
                // img={course.img}
                id={course.userId}
                courseName={course.courseName}
                description={course.description}
                price={course.price}
                userId={course.userId}
                courseId={course._id}
                subscription={course.subscription}
              />
            </div>
                )
        }
      )}
  
    </div>
</div>
    
  );
};

export default CoursesList;
