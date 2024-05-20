import React, { useEffect, useState } from 'react'
import './contentsClassPeople.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const ContentsClassPeople = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/users', { withCredentials: true });
        console.log(data.users);
        setUsers(data.users);
      } catch (error) {

        console.error('Error fetching data:', error);
        setError('there is an error')
      }
    };

    fetchData();
  }, [])
  const navigate = useNavigate()
  const handleCourses = () => {
    navigate('/contentsClass')
  }

  return (
    <>
      <div id='theContainer2'>
        <button onClick={handleCourses} className='mx-3' id='Courses2'> Courses</button>
        <button className='mx-3' id='Chats2'> Chats</button>
        <button className='mx-3' id='people2'> people</button>
      </div>
      <div id='theCourses1'>
        <h1>Math</h1>
      </div>
      {error ? (
        <div id='theError'>Sorry, but access is only granted to those with admin permission</div>
      ) : (
        <div>
          <h2>Users List</h2>
          <ul>
            {users.map(user => (
              <li key={user._id}>{user.firstName} {user.lastName}</li>
            ))}
          </ul>
        </div>
      )}

    </>
  )
}


export default ContentsClassPeople 