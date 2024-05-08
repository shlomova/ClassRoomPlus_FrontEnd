import React from 'react'
import './contentsClassPeople.css'
import { useNavigate } from 'react-router-dom'


const ContentsClassPeople = () => {
  const navigate = useNavigate()
  const handleCourses = () =>{
    navigate('/contentsClass')
  }

  return (
  <>   
  <div id='theContainer2'>
      <button onClick={handleCourses} className='mx-3' id='Courses2'> Courses</button>
      <button className='mx-3' id='Chats2'> Chats</button>
      <button className='mx-3' id = 'people2'> people</button>
  </div>
  <div id='theCourses1'>
            <h1>Math</h1>
    </div> 
    <div id = 'theUl2' className='d-flex'>
    <ul>
        <h1> Teachers </h1>
        <li > Ziv Bacher</li>
        <li > David Cohen</li>
        <li>Banya Kehlani</li>
  </ul>
    </div>
    <div id = 'theUl2' className='d-flex'>
    <ul>
        <h2> Students </h2>
        <li > Yehuda Bruiner</li>
        <li > Haim Shevdron</li>
        <li>Maor Crispel</li>
  </ul>
    </div>
  </>
    )
  }


export default ContentsClassPeople 