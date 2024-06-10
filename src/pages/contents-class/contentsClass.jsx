import React, { useEffect } from 'react'
import './contentsClass.css'
import axios from 'axios'
import { useState } from 'react'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import ContentsClassPeople from '../../Components/contents-class-people/ContentsClassPeople'
import UtilsCheckUserAndToken from '../../utils/utilsCheckUserAndToken'
import AddFile from '../../Components/addFile/AddFile'
import GetFiles from '../../Components/getFiles/getFiles'


const ContentsClass = () => {
  const checkUserAndToken = UtilsCheckUserAndToken()
  const [courses, setCourses] = useState(true)
  const [people, setPeople] = useState(null)
  const [chats, setChats] = useState(null)
  const [openPostFile, setOpenPostFile] = useState(null)
  const location = useLocation()
  const { openDate, endDate, courseId, courseName, description, price } = location.state || {};

  useEffect(() => {
    checkUserAndToken()
  }, [])
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/files/course/${courseId}`, { withCredentials: true });
        console.log(res);
        const files = res.data.files.map(item => ({ ...item, file: `http://localhost:3000${item.file}` }))
        console.log(files);
        setImages(files);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFiles();
  }, [courseId]);

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
    setPeople(true)
    setCourses(false)
    setChats(false)
    setOpenPostFile(false)

  }
  const handleChats = () => {
    setChats(true)
    setCourses(false)
    setPeople(false)
    setOpenPostFile(false)



  }
  const handleCourses = () => {
    setCourses(true)
    setPeople(false)
    setChats(false)
    setOpenPostFile(false)


  }
  const handleButtonPostFile = () => {
     setOpenPostFile(true)
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
      {courses &&  !openPostFile &&(
        <>
          <div id='theUl1'>
            <ul id='ul'>
              <li id='theLi'>
                <h2>{courseName}</h2>
              </li>
              <li >{openDate}</li>
              <li >{endDate}</li>
              <li ref={targetRef} onMouseEnter={togglePopup} onMouseLeave={togglePopup} className='text-decoration-underline' id='De'>{description}</li>
              <li >{price}</li>
              <button id='PostFile' onClick={handleButtonPostFile}> post file</button>
            </ul>
            {isOpen && (
              <div id="popup" style={{ top: position.top, left: position.left }}>
                <span className="close" onClick={togglePopup}>&times;</span>
                <p>Here goes the text of the description.</p>
              </div>
            )}
          </div>
        <GetFiles images={images} />

        </>
      )}
      {people && (
        <ContentsClassPeople courseId={courseId} />
      )}
      {chats && (
        <div>
          <p id='חיים'> שלום לחיים שבדרון</p>
          <p id='חיים'> כאן זה התקפיד שלך למלא</p>
        </div>
      )}
      {openPostFile && (
        <div>
        <AddFile courseId={courseId}/>
        </div>
      )}
    
    </>
  );
};

export default ContentsClass;
