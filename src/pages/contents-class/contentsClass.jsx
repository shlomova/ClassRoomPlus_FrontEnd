import React from 'react'
import './contentsClass.css'
import { useNavigate } from 'react-router-dom'

const ContentsClass = () => {
    const navigate = useNavigate()
    const handlePeople = () =>{
        navigate('/contentsClassPeople')
    }
  return (
    <>
    <div id='theContainer1'>
        <button className='mx-3' id='Courses1'> Courses</button>
        <button className='mx-3' id='Chats1'> Chats</button>
        <button onClick={handlePeople} className='mx-3' id = 'people1'> people</button>
    </div>
    <div id='theCourses1'>
            <h1>Math</h1>
    </div> 
    <div id = 'theUl1'>
    <ul>
        <h2> Math </h2>
        <li > Started in May 2020</li>
        <li > The course is 250 hours</li>
        <li>The tests are every week.</li>
    </ul>
    </div>
    </>
  )
}

export default ContentsClass