import React, { useEffect, useState, useRef } from 'react';
import './contentsClass.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ContentsClassPeople from '../../Components/contents-class-people/ContentsClassPeople';
import UtilsCheckUserAndToken from '../../utils/utilsCheckUserAndToken';
import Chatroom from '../../Components/chatroom/chatroom.jsx';
import AddFile from '../../Components/addFile/AddFile';
import GetFiles from '../../Components/getFiles/getFiles';
import Chatbot from '../../Components/chatbot/chatbot';
import Header from '../../Components/header/Header';

const ContentsClass = () => {
  const checkUserAndToken = UtilsCheckUserAndToken();
  const [friends, setFriends] = useState([]);
  const [courses, setCourses] = useState(true);
  const [people, setPeople] = useState(null);
  const [chats, setChats] = useState(null);
  const [openPostFile, setOpenPostFile] = useState(false);
  const location = useLocation();
  const [teacher, setTeacher] = useState(false);
  const { openDate, endDate, courseId, courseName, description, price, subscription, userId } = location.state || {};
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const avatar = JSON.parse(localStorage.getItem('avatar'));
  const name = userInfo?.data?.user?.firstName;
  const theUserId = userInfo?.data?.user?._id;

  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({});
  const targetRef = useRef(null);

  useEffect(() => {
    checkUserAndToken();
  }, [checkUserAndToken, userId, theUserId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/files/course/${courseId}`, { withCredentials: true });
        console.log(res.data);
        const files = res.data.files;
        setImages(files);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [courseId]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/courses/${courseId}`, { withCredentials: true });
        setFriends(res.data.course.subscriptions);
        setTeacher(res.data.course.userId === theUserId);
        // setImages (res.data.course.contents)
        console.log(res.data.course.contents);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [courseId]);



  const togglePopup = () => {
    if (targetRef.current) {
      const { top, left } = targetRef.current.getBoundingClientRect();
      const popupTopPosition = top + window.scrollY - 30;
      setPosition({ top: popupTopPosition, left: left + window.scrollX });
      setIsOpen(!isOpen);
    }
  };

  const handlePeople = () => {
    setPeople(true);
    setCourses(false);
    setChats(false);
    setOpenPostFile(false);
  };

  const handleChats = () => {
    setChats(true);
    setCourses(false);
    setPeople(false);
    setOpenPostFile(false);
  };

  const handleCourses = () => {
    setCourses(true);
    setPeople(false);
    setChats(false);
    setOpenPostFile(false);
  };

  const handleButtonPostFile = () => {
    setOpenPostFile(true);
  };

  const handleFileUpload = (newFile) => {
    setImages([...images, newFile]);
    setOpenPostFile(false);
  };

  return (
    <>
      <Header showLinks={false} showPartLinks={true} />
      <Chatbot />

      <div id='theContainer1'>
        <button onClick={handleCourses} className='mx-3' id={courses ? 'Courses1' : 'none'}>Courses</button>
        <button onClick={handleChats} className='mx-3' id={chats ? 'Courses1' : 'chats'}>Chats</button>
        <button onClick={handlePeople} className='mx-3' id={people ? 'Courses1' : 'people1'}>People</button>
      </div>
      <div id='theCourses1'>
        <h2>Friends</h2>
        <div className='theFriends'>
          <div className='theFriend'>
            <img className='friendimg' src={avatar} alt='avatar' />
            <p>{name}</p>
          </div>
        </div>
      </div>
      {courses && !openPostFile && (
        <>
          <div id='theUl1'>
            <ul id='ul'>
              <li id='theLi'>
                <h2>{courseName}</h2>
              </li>
              <li>{openDate}</li>
              <li>{endDate}</li>
              <li ref={targetRef} onMouseEnter={togglePopup} onMouseLeave={togglePopup} className='text-decoration-underline' id='De'>{description}</li>
              <li>{price}</li>
              {teacher && (
                <button id='PostFile' onClick={handleButtonPostFile}>Post file</button>
              )}
            </ul>
            {isOpen && (
              <div id="popup" style={{ top: position.top, left: position.left }}>
                <span className="close" onClick={togglePopup}>&times;</span>
                <p>Here goes the text of the description.</p>
              </div>
            )}
          </div>
           for 
          <GetFiles images={images} teacher={teacher} />
        </>
      )}
      {people && (
        <ContentsClassPeople courseId={courseId} />
      )}
      {chats && (
        <div>
          <Chatroom courseId={courseId} />
        </div>
      )}
      {openPostFile && (
        <div>
          <AddFile courseId={courseId} onFileUpload={handleFileUpload} />
        </div>
      )}
    </>
  );
};

export default ContentsClass;
