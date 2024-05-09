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
    <div className='theUl2'>
    <ul>
        <h1 id='h1'> Teachers </h1>
        <li className='EachLi'> Ziv Bacher</li>
        <li className='EachLi'> David Cohen</li>
        <li className='EachLi'>Banya Kehlani</li>
  </ul>
    </div>
    <div className='theUl2'>
    <ul>
        <h2 id='h1'> Students </h2>
        <li className='EachLi'> Yehuda Bruiner</li>
        <li className='EachLi'> Haim Shevdron</li>
        <li className='EachLi'>Maor Crispel</li>
  </ul>
    </div>
  </>
    )
  }


export default ContentsClassPeople 