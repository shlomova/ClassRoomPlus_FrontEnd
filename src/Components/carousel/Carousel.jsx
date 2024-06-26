import React, { useState } from 'react';
import CourseCard from './CourseCard.jsx';
import './Carousel.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Carousel = ({ courses }) => {
  const [startIndex, setStartIndex] = useState(0);

  const scrollLeft = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? courses.courses.length - 1 : prevIndex - 1));
  };

  const scrollRight = () => {
    setStartIndex((prevIndex) => (prevIndex === courses.courses.length - 1 ? 0 : prevIndex + 1));
  };
  if (!Array.isArray(courses.courses) || courses.courses.length === 0) {
    return <div className="carousel-container">No courses available</div>;
  }

  const visibleCourses = [
    ...courses.courses.slice(startIndex),
    ...courses.courses.slice(0, startIndex),
  ];

  const courseCards = visibleCourses.map(course => (
    <CourseCard key={course._id} course={course} />
  ));

  return (
    <div className="carousel-container">
      <div className="carousel">
        {courseCards}
      </div>
 
      </div>
   
  );
};

export default Carousel;
