import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import Dashboard from './pages/LogIn/Dashboard.jsx'
import LogIn from './pages/LogIn/LogIn';
import App from './App.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LogIn />,
    },
    {
        path: '/app',
        element: <App />
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
