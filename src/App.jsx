import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom'
import CoursesList from './Components/courses-list/coursesList'
import axios from 'axios'

function App() {
    const navigete = useNavigate()
    const [coursesArr, setCoursesArr] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('http://localhost:3000/courses');
                setCoursesArr(data.courses);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])
    const handleButton = () => {
        navigete('/addCourse')   
    }
    return (
        <>
        <div className='container'>
            <CoursesList courses={coursesArr}/>
        </div>
        <button id='AppButton' onClick={handleButton}> To add a new course  </button>
        </>
    )

}

export default App
