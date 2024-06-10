import React, { useRef, useState } from 'react';
import CourseCard from './CourseCard.jsx';
import './Carousel.css'; 
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; 

const Carousel = ({ courses }) => {
  const carouselRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);

  const scrollLeft = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const scrollRight = () => {
    if (startIndex < courses.courses.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  if (!Array.isArray(courses.courses) || courses.courses.length === 0) {
    return <div className="carousel-container">No courses available</div>;
  }

  const visibleCourses = courses.courses.slice(startIndex, startIndex + 3);
  const courseCards = visibleCourses.map(course => (
    <CourseCard key={course._id} course={course} />
  ));

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        {courseCards}
        <div className="carousel-buttons">
       
      <button className="carousel-button" onClick={scrollLeft}><BsChevronLeft /></button>
      <button className="carousel-button" onClick={scrollRight}><BsChevronRight /></button>
      </div>
      </div>
    </div>
  );
};

export default Carousel;
