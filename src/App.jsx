import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import AddCourse from './Components/course-item/add-course/addCourse';
import UtilsCheckUserAndToken from './utils/utilsCheckUserAndToken';
import Subjects from './Components/subjects/subjects';
import Chatbot from './Components/chatbot/chatbot';
import CourseItem from './Components/course-item/courseItem';
import Subscription from './Components/subscribe/subscribe';
import Header from './Components/header/Header'
import { Link } from 'react-router-dom'


function App() {
  const [addCourse, setAddCourse] = useState(false);
  const [coursesArr, setCoursesArr] = useState([]);
  const [categories, setCategories] = useState([]);
  const [userId, setUserId] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const checkUserAndToken = UtilsCheckUserAndToken();

// need to check witch courses the user is subscribed to and only them to show
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/courses/byUser', { withCredentials: true });
        console.log( 1,response);
        const { data } = response;
        if (!data) return <div>you are not in any courses</div>;
        setCategories(data.categories);
        setCoursesArr(data.userscourses)
      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);




 

  useEffect(() => {
    const data = checkUserAndToken();
    if (data) {
      setUserId(`${data.user._id}`);
    }
  }, []);
    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        window.location.href = '/';
    };


  const handleButton = () => {
    setAddCourse(!addCourse);
  };

  const handleClose = () => {
    setAddCourse(false);
  };

  const handleNavigateToCourse = (courseId) => {
    const course = coursesArr.find(c => c._id === courseId);
    setSelectedCourse(course);
  };


  return (
    <>
      <div>
        <Header showLinks={true} showPartLinks={false} />
        <Chatbot onNavigateToCourse={handleNavigateToCourse} />
        {addCourse && <AddCourse handleClose={handleClose} userId={userId}/>}
        <button className="btn btn-primary" onClick={handleButton}>Add Course</button>
        {selectedCourse ? (
         

          <>
            <CourseItem
              openDate={selectedCourse.openDate}
              endDate={selectedCourse.endDate}
              id={selectedCourse.userId}
              courseName={selectedCourse.courseName}
              description={selectedCourse.description}
              price={selectedCourse.price}
              userId={selectedCourse.userId}
              courseId={selectedCourse._id}
            />
            <Subscription courseId={selectedCourse._id} userId={userId} />
          </>
        

        ) : (
          <Subjects
            courses={coursesArr}
            setCourses={setCoursesArr}
            categories={categories}
          />
        )}
      </div>
    </>


  );
}

export default App;
