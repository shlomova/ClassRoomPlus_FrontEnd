import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom'
import MainLogIn from './Components/log-in/mainLogIn'
import App from './App'
import Subscribe from './Components/log-in/subscribe'

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLogIn/>,
        
    },
    {
        path:'/app',
        element:<App/>
    },
    {
        path:'/subscribe',
        element:<Subscribe/>
    }
  
    
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>    
)
