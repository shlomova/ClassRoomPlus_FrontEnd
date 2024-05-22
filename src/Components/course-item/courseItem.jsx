import React from "react"
import './courseItem.css'
import { useNavigate } from "react-router-dom"

const CourseItem = ({openDate, endDate, id, courseName, description, price, userId}) => {
  const navigate = useNavigate()
  const handleButton =() => {
    navigate('/contentsClass', { state: { openDate, endDate, id, courseName, description, price } })
  }
 
  return (
 
    <div className="card ">
        <p id="courseName">{courseName}</p>
        <p className="pCI">{description}</p>
        <label className="d-flex" htmlFor=""> open data:
        <h2 id="opendate">{openDate}</h2>
        </label>
        <label className="d-flex" htmlFor=""> end date:
        <p id="endDate"> {endDate}</p>
        </label>
        <label className="d-flex" htmlFor=""> price: 
        <p className="pCI"> {price}</p>
        </label>
        <label htmlFor="">user id:
        <p >{userId} </p>
        </label>
        <button className="button" id = {id} onClick={handleButton}> to enter the course</button>
    </div>
  
  )
}

export default CourseItem