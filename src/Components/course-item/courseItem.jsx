import React, { useState } from "react"
import './courseItem.css'
import { useNavigate } from "react-router-dom"
import Subscription from "../subscribe/subscribe"
import DeleteSubscription from "../DeleteSubscription/DeleteSubscription"

const CourseItem = ({ openDate, endDate, id, courseName, description, price, userId, courseId, subscription }) => {
  const [subscribe, setSubscribe] = useState(false)
  const [Deltesubscribe, setDeleteSubscribe] = useState(false)
  const [showSubscription, setShowSubscription] = useState();
  const [showDeleteSubscription, setDeleteShowSubscription] = useState();
  const navigate = useNavigate()
  const handleButton = () => {
    console.log({ openDate, endDate, courseId, courseName, description, price });
    navigate('/contentsClass', { state: { openDate, endDate, courseId, courseName, description, price, subscription } })
  }
  const handleSubscribe = () =>{
    setSubscribe(true)
    setShowSubscription(true)
  }
  const handleDeleteSubscribe = () =>{
    setDeleteSubscribe(true)
    setDeleteShowSubscription(true)
  }
  const userInfo = localStorage.getItem('userInfo');
  const { data } = JSON.parse(userInfo);


  return (
    <>
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
      <div className="d-flex">
      <button className="button" id={id} onClick={handleButton}> to enter the course</button>
      <div className="d-flex flex-column">
      <button className="button2" id={id} onClick={handleSubscribe}> subscribe </button>
      <button className="button3" id={id} onClick={handleDeleteSubscribe}> delete subscribe </button>
      </div>
      </div>
    {subscribe &&(
      <div>
      <Subscription
      user={data.user}
      courseId={courseId}
      showSubscription={showSubscription}
      setShowSubscription={setShowSubscription}
      />
      </div>
    )}
    {Deltesubscribe &&(
      <div>
      <DeleteSubscription
      user={data.user}
      courseId={courseId}
      showDeleteSubscription={showDeleteSubscription}
      setDeleteShowSubscription={setDeleteShowSubscription}
      />
      </div>
    )}

    </div>
    </>
  )
}

export default CourseItem