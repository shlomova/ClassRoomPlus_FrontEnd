import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { getCourses } from './api-services/coursesServices'

const [coursesArr, setCoursesArr] = useState([])

useEffect(() => {
    getCourses().then(data => setCoursesArr(data))
}, [])

ReactDOM.createRoot(document.getElementById('root')).render(
<>

</>
)
