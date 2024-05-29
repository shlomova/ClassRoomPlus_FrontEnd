import React, { useEffect, useState } from 'react'
import './contentsClassPeople.css'
import axios from 'axios'


const ContentsClassPeople = ({courseId}) => {
  const [error, setError] = useState(null)
  const [subscribed, setSubscribed] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/courses/${courseId}`, { withCredentials: true });
        const theCourseSubscriptoins = (data.courses.subscription)
        console.log(theCourseSubscriptoins);
        const filtered = theCourseSubscriptoins.map(course => course.userId);
        setSubscribed(filtered);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('there is an error')
      }
    };

    fetchData();
  }, [])


  return (
    <>
      <div>
        <h2>Users List</h2>
        {error && <p>{error}</p>}
        <ul>
        {subscribed.length > 0 ? (
          subscribed.map(user => (
            <li key={user._id}> {`${user.firstName} ${user.lastName}`}</li>
          ))
        ) : (
          <p>No users subscribed.</p>
        )}
        </ul>
      </div>
    </>
  );
};



export default ContentsClassPeople 