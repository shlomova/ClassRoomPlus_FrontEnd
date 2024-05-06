import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const [name, setName] = useState('')
    const  navigate = useNavigate()
    const handleLogout = () =>{
        localStorage.removeItem('userInfo')
        navigate('/')
    }
    useEffect(() =>{
        if (!localStorage.getItem('userInfo')){
            alert('Sorry, you do not have a registered system. Try again.')
            navigate('/')
            return
        }
        const {data, token} =JSON.parse(localStorage.getItem('userInfo'))
        if (!token){
            navigate('/')
        }
        setName(data.user.name)
    }, [])
    const handleToContinue = () =>{
        navigate('/app')
    }

  return (
    <>
    <div>Welcome {name}</div>
    <button onClick={handleToContinue}> To continue </button>
    <button onClick={handleLogout} Logout></button>

    </>
  )
}

export default Dashboard