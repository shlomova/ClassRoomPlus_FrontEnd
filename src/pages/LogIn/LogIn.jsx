import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './../../Components/header/Header';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dottedPassword, setDottedPassword] = useState('');
  const [missing, setMissing] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:3000/users/login', 
        { email, password },
        { headers: { 'Access-Control-Allow-Origin': '*' }, withCredentials: true }
      );
      if (data) {
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/dashboard');
      }
    } catch (error) {
      setMissing('');
      setError('');
      if (!email && !password) {
        setMissing('The email and password are missing');
      } else if (!email || !password) {
        setMissing('The email or password is missing');
      } else {
        setError('You are not in the system. Do you want to sign up?');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setDottedPassword('•'.repeat(value.length));
  };

  return (
    <>
      <Header showLinks={false} />
      <div className='maincontainer1'>
        <div className="login-container">
          <form className="login-form d-flex" onSubmit={handleLogin}>
            <h2 className="login-title">Welcome to ClassRoom+</h2>
            {missing && <p className="text-red-500">{missing}</p>}
            {error && <p className="text-red-500">{error}</p>}
            <div className="mb-4">
              <label className="login-label" htmlFor="email">Email</label>
              <input
                className="form-input"
                type="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 password-container">
              <label className="login-label" htmlFor="password">Password</label>
              <input
                className="form-input password-input"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <i
                className={`eye-icon fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={togglePasswordVisibility}
              ></i>
              <div className="demo__text demo__text-dots">{dottedPassword}</div>
            </div>
            <div className="buttons">
              <button className="btn-primary w-full py-2 rounded-md text-white font-semibold" type="submit">Login</button>
              <button
                className="btn-primary w-full py-2 rounded-md text-white font-semibold mt-2"
                type="button"
                onClick={() => navigate('/Signup')}
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
