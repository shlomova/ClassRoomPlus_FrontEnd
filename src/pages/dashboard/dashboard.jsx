import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './dashboard.css'
import UtilsCheckUserAndToken from '../../utils/utilsCheckUserAndToken';
import Header from "../../Components/header/Header.jsx";

const dashboard = () => {
    const [name, setName] = useState()
    const navigate = useNavigate()
    const checkUserAndToken = UtilsCheckUserAndToken();

    const handleLogout = () => {
        localStorage.removeItem('userInfo')
        navigate('/')
    }

    useEffect(() => {
        const data = checkUserAndToken();
        if (data) {
            setName(`${data.user.firstName} ${data.user.lastName}`);
        }

    },[]);

    const handleToContinue = (e) => {
        e.preventDefault();
        navigate('/App')
    }

    return (
        <>
            <div className='maincontainer2'>
                <div className="dashboard-container">
                    <div className="dashboard-title">Welcome {name}</div>
                    <button className="dashboard-button" onClick={handleToContinue}>
                        To continue
                    </button>
                    <button className="dashboard-button" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};


export default dashboard