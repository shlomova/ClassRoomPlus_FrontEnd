import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogIn = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault()
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
    try {
      const { data } = await axios.post(`http://localhost:3000/users/login`, { email, password }, config)
      console.log(data);
      if (data) {
        localStorage.setItem('userInfo', JSON.stringify(data))
        navigate('/dashboard')
        return
      }
    } catch (error) {
      alert('It is forbidden')
    }
    // navigate('/')
  }
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

    </>
  );
}

export default LogIn
