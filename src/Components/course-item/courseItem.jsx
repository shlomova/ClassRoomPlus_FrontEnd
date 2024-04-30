import React from "react"
import './courseItem.css'

const CourseItem = ({id, img, courseTopic, teacherName}) => {
  return (
    <div className="card">
        <img src={img} alt="name"/>
        <h2>{courseTopic}</h2>
        <p> {teacherName}</p>
        <button id = {id}> to enter the course</button>
    </div>
  )
}

export default CourseItem