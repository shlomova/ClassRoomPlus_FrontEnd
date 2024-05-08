import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import LogIn from './pages/LogIn/LogIn';
import App from './App.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Subscribe from './pages/subscribe/subscribe.jsx';

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
    {
        path: 'subscribe',
        element: <Subscribe />
    }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
