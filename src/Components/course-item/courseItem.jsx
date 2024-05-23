import React from "react"
import './courseItem.css'
import { useNavigate } from "react-router-dom"

const CourseItem = ({ openDate, endDate, id, courseName, description, price, userId }) => {
  const navigate = useNavigate()
  const handleButton = () => {
    navigate('/contentsClass', { state: { openDate, endDate, id, courseName, description, price } })
  }

  return (

    <div className="card ">
      <div id="courseName">{courseName}</div>
      <div className="pCI">{description}</div>
      <label className="d-flex" htmlFor=""> open data:
        <h2 id="opendate">{openDate}</h2>
      </label>
      <div className="d-flex gap-1" >
        <div id="b">end date:</div>
        <div id="endDate"> {endDate}</div>
      </div>
      <label className="d-flex" htmlFor=""> price:
        <div className="pCI"> {price}</div>
      </label>
      <label htmlFor="">user id:
        <div>{userId} </div>
      </label>
      <button className="button" id={id} onClick={handleButton}> to enter the course</button>
    </div>

  )
}

export default CourseItem