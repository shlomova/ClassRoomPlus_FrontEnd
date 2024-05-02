import React from "react"
import './courseItem.css'
import { useNavigate } from "react-router-dom"

const CourseItem = ({id, img, courseTopic, teacherName}) => {
  const navigate = useNavigate()
  const handleButton =() => {
    navigate('/subscribe')

  }
  return (
    <div className="card">
        <img src={img} alt="name"/>
        <h2>{courseTopic}</h2>
        <p> {teacherName}</p>
        <button id = {id} onClick={handleButton}> to enter the course</button>
    </div>
  )
}

export default CourseItem