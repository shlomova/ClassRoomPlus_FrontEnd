import React, { useEffect } from 'react'
import './contentsClass.css'
import { useState } from 'react'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import ContentsClassPeople from '../../Components/contents-class-people/ContentsClassPeople'
import UtilsCheckUserAndToken from '../../utils/utilsCheckUserAndToken'


const ContentsClass = () => {
  const checkUserAndToken = UtilsCheckUserAndToken()
  const [courses, setCourses] = useState(true)
  const [people, setPeople] = useState(null)
  const [chats, setChats] = useState(null)
  const location = useLocation()
  const { openDate, endDate, id, courseName, description, price } = location.state || {};

  useEffect(() => {
    checkUserAndToken()
  }, [])

  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({});
  const targetRef = useRef(null);


  const togglePopup = () => {
    const { top, left } = targetRef.current.getBoundingClientRect();
    const popupTopPosition = top + window.scrollY - 30;
    setPosition({ top: popupTopPosition, left: left + window.scrollX });
    setIsOpen(!isOpen);
  };
  const handlePeople = () => {
    setCourses(false)
    setChats(false)
    setPeople(true)
  }
  const handleChats = () => {
    setCourses(false)
    setPeople(false)
    setChats(true)
  }
  const handleCourses = () => {
    setCourses(true)
    setPeople(false)
    setChats(false)
  }

  return (
    <>

      <div id='theContainer1'>

        <button onClick={handleCourses} className='mx-3' id={courses ? 'Courses1' : 'none'}> Courses</button>
        <button onClick={handleChats} className='mx-3' id={chats ? 'Courses1' : 'chats'}>Chats</button>
        <button onClick={handlePeople} className='mx-3' id={people ? 'Courses1' : 'people1'}>people</button>
      </div>
      <div id='theCourses1'>
        <h1>{courseName}</h1>
      </div>
      {courses && (
        <>
          <div id='theUl1'>
            <ul id='ul'>
              <li key={`${id}-name`} id='theLi'>
                <h2>{courseName}</h2>
              </li>
              <li key={`${id}-openDate`}>{openDate}</li>
              <li key={`${id}-endDate`}>{endDate}</li>
              <li key={`${id}-description`} ref={targetRef} onMouseEnter={togglePopup} onMouseLeave={togglePopup} className='text-decoration-underline' id='De'>{description}</li>
              <li key={`${id}-price`}>{price}</li>
            </ul>
            {isOpen && (
              <div id="popup" style={{ top: position.top, left: position.left }}>
                <span className="close" onClick={togglePopup}>&times;</span>
                <p>Here goes the text of the description.</p>
              </div>
            )}
          </div>
        </>
      )}
      {people && (
        <ContentsClassPeople />
      )}
      {chats && (
        <div>
          <p id='חיים'> שלום לחיים שבדרון</p>
          <p id='חיים'> כאן זה התקפיד שלך למלא</p>
        </div>
      )}
    </>
  );
};

export default ContentsClass;
