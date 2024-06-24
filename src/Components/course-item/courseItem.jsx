import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Subscription from "../subscribe/subscribe";
import DeleteSubscription from "../DeleteSubscription/DeleteSubscription";
import './courseItem.css'; // Import the CSS file

const CourseItem = ({ openDate, endDate, id, courseName, description, price, userId, courseId }) => {
  const [subscribe, setSubscribe] = useState(false);
  const [Deltesubscribe, setDeleteSubscribe] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);
  const [showDeleteSubscription, setDeleteShowSubscription] = useState(false);
  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/contentsClass', { state: { openDate, endDate, courseId, courseName, description, price } });
  };

  const handleSubscribe = () => {
    setSubscribe(true);
    setShowSubscription(true);
  };

  const handleDeleteSubscribe = () => {
    setDeleteSubscribe(true);
    setDeleteShowSubscription(true);
  };

  const userInfo = localStorage.getItem('userInfo');
  const { data } = JSON.parse(userInfo);

  const imageMapping = {
    1:'./../../assets/images/1.jpg',
    2:'./../../assets/images/2.jpg',
    3:'./../../assets/images/3.jpg',
    4:'./../../assets/images/4.jpg',
    5:'./../../assets/images/5.jpg',
    6:'./../../assets/images/6.jpg',
    7:'./../../assets/images/7.jpg',
    8:'./../../assets/images/8.jpg',
    9:'./../../assets/images/9.jpg',
    10:'./../../assets/images/10.jpg',
    11:'./../../assets/images/11.jpg',
    12:'./../../assets/images/12.jpg',
    13:'./../../assets/images/13.jpg',
  };

  const backgroundImage = imageMapping[courseId] || '';

  return (
    <>
      <div className="card h-100 course-item" style={{ width: '18rem', overflow: 'hidden', backgroundImage: `url(${backgroundImage})` }}>
        <div className="card-body d-flex flex-column">
          <div id="courseName" className="card-title">{courseName}</div>
          <div className="pCI card-text flex-grow-1" style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{description}</div>
          <div className="d-flex justify-content-between mt-auto">
            <label htmlFor="openDate">Open date: <span id="opendate">{openDate}</span></label>
          </div>
          <div className="d-flex justify-content-between">
            <div id="b">End date:</div>
            <div id="endDate">{endDate}</div>
          </div>
          <div className="d-flex justify-content-between">
            <label htmlFor="price">Price: <span className="pCI">{price}</span></label>
          </div>
          <div className="d-flex justify-content-between mt-auto">
            <button className="btn btn-primary" id={id} onClick={handleButton}>Enter Course</button>
            <div className="d-flex flex-column">
              <button className="btn btn-secondary mb-1" id={id} onClick={handleSubscribe}>Subscribe</button>
              <button className="btn btn-danger" id={id} onClick={handleDeleteSubscribe}>Unsubscribe</button>
            </div>
          </div>
          {subscribe && (
            <Subscription
              user={data}
              courseId={courseId}
              showSubscription={showSubscription}
              setShowSubscription={setShowSubscription}
            />
          )}
          {Deltesubscribe && (
            <DeleteSubscription
              user={data}
              courseId={courseId}
              showDeleteSubscription={showDeleteSubscription}
              setDeleteShowSubscription={setDeleteShowSubscription}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CourseItem;
