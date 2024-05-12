import React from 'react'
import './contentsClass.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const ContentsClass = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({});
  const targetRef = useRef(null);

  const togglePopup = () => {
    const { top, left } = targetRef.current.getBoundingClientRect();
    const popupTopPosition = top + window.scrollY - 30; 
    setPosition({ top: popupTopPosition, left: left + window.scrollX });
    setIsOpen(!isOpen);
  };
    const navigate = useNavigate()
    const handlePeople = () =>{
        navigate('/contentsClassPeople')
    }
  return (
    <>
    <div id='theContainer1'>
        <button className='mx-3 ' id='Courses1'> Courses</button>
        <button className='mx-3' id='Chats1'> Chats</button>
        <button onClick={handlePeople} className='mx-3' id = 'people1'> people</button>
    </div>
    <div id='theCourses1'>
            <h1>Math</h1>
    </div> 
    <div id = 'theUl1'>
    <ul id='ul'> 
        <li id='theLi'> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYUyl_mIg-deN5WjXpdoREuNl7P5O8bsiLA&usqp=CAU" alt="Math" /> <h2> Math </h2>
        </li>
        <li> Started in May 2020</li>
        <li> In process</li>
        <li ref={targetRef} onMouseEnter={togglePopup} onMouseLeave={togglePopup} className='text-decoration-underline' id='De'>Description</li>
        <li>Price</li>
    </ul>
    {isOpen && (
        <div id="popup" style={{ top: position.top, left: position.left }}>
          <span className="close" onClick={togglePopup}>&times;</span>
          <p>Here goes the text of the description.</p>
        </div>
      )}
    </div>
    </>
  )
}

export default ContentsClass