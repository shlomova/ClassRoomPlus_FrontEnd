// src/Components/courses-section/CoursesSection.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../carousel/Carousel';

const CoursesSection = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3000/courses');
        console.log('Fetched courses:', response.data); // Added console log
        setCourses(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching courses:', err); // Added console log
        setError(err);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div>Error: {error.message}</div>;
    
  return (
    <div className="courses-section">
      <Carousel courses={courses} />
      
    </div>
  );
};

export default CoursesSection;
