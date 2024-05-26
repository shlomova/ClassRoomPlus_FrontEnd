import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import AddCourse from './Components/course-item/add-course/addCourse'
import UtilsCheckUserAndToken from './utils/utilsCheckUserAndToken'
import Subjects from './Components/subjects/subjects'


function App() {
    const [addCourse, setAddCourse] = useState(false)
    const [coursesArr, setCoursesArr] = useState([])
    const [categories, setCategories] = useState([])
    const [userId, setUserId] = useState('')
    const checkUserAndToken = UtilsCheckUserAndToken()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('http://localhost:3000/courses');
                setCoursesArr(data.courses);
                setCategories(data.courses)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])

    useEffect(() => {
        const data = checkUserAndToken();
        if (data) {
            setUserId(`${data.user._id}`);
        }
    }, [])
    const handleButton = () => {
        setAddCourse(!addCourse)
    }
    const handleClose = () => {
        setAddCourse(false);
    };

    return (
        <>
            <div htmlFor=""> 
                <Subjects
                    courses={coursesArr}
                    setCourses={setCoursesArr}
                    categories={categories}
                />
                </div>
         
            <button id='AppButton' onClick={handleButton}> To add a new course  </button>
            {addCourse && (
                <AddCourse onClose={handleClose} userId={userId} />
            )}


        </>
    )

}

export default App
