import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getCourses } from './api-services/coursesServices'
import InputUser from './Components/Input-user/InputUser'
import CoursesList from './Components/courses-list/coursesList'

function App() {
    const [coursesArr, setCoursesArr] = useState([])

    useEffect(() => {
        getCourses().then(data => setCoursesArr(data))
    }, [])
    return (
        <div className='container'>
            <CoursesList courses={coursesArr} />
        </div>
    )

}

export default App
