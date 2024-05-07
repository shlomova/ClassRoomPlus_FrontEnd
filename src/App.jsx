// import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import CoursesList from './Components/courses-list/coursesList'
// import InputUser from './Components/Input-user/InputUser'
// import axios from 'axios'

function App() {
    // const [coursesArr, setCoursesArr] = useState([])
    // useEffect( async () =>{
    //     const {data} = await axios.get('http://localhsot:3000/courses')
    //     setCoursesArr(data)
    // },[])
    const handleCourse = () => {
        
    }
    return (
        <div className='container'>
            {/* <CoursesList course={coursesArr}/> */}
        <button onClick={handleCourse}>Math</button>            
        
        </div>
    )

}

export default App
