import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import LogIn from './pages/LogIn/LogIn';
import App from './App.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import ContentsClass from './pages/contents-class/contentsClass.jsx';
import ContentsClassHistory from './pages/contents-class-history/contentsClassHistory.jsx'
import ContentsClassPeople from './pages/contents-class-people/ContentsClassPeople.jsx';
// import AddCourse from './Components/course-item/add-course/addCourse.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LogIn />,
    },
    {
        path: 'dashboard',
        element:<Dashboard/>
       

    },
    {
        path: '/App',
        element: <App />
    },
    // {
    //     path: 'addCourse',
    //     element: <AddCourse/>
    // },
    {
        path: 'contentsClass',
        element: <ContentsClass/>
    },
    {
        path: 'contentsClassHistory',
        element: <ContentsClassHistory/>
    },
    {
        path: 'contentsClassPeople',
        element: <ContentsClassPeople/>
    }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
