import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [missing, setMissing] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    try {
      const { data } = await axios.post(`http://localhost:3000/users/login`, { email, password }, { withCredentials: true });
      console.log(data);
      if (data) {
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/dashboard');
        return;
      }
    } catch (error) {
      if (!email && !password) {
        setMissing('');
        setError('');
        setMissing('The email and password are missing');
      } else {
        if (!email || !password) {
          setMissing('');
          setError('');
          setMissing('The email or password is missing');
          return;
        } else {
          setMissing('');
          setError('');
          setError('You are not in the system. Do you want to sign up?');
        }
      }
    }
    navigate('/');
  };

  return (
    <>
      <div className='maincontainer1'>
        <div className="login-container">
          <h2 className="login-title">Welcome to our classroom</h2>
          <form onSubmit={handleLogin}>
            <label className="login-label">Email:</label>
            <input
              className="login-input"
              type="email"
              autoComplete="email" // הוספת תכונה להשלמה אוטומטית
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="login-label">Password:</label>
            <input
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <p>{error}</p>
            )}
            {missing && (
              <p>{missing}</p>
            )}
            <button className="login-button" type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
