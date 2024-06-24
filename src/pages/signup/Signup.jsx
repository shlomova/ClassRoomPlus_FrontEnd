import React, { useState } from 'react';
import axios from 'axios';
import Header from './../../Components/header/Header';
import './../LogIn/Login.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'user'
  });

  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setFormErrors({ confirmPassword: "Passwords don't match" });
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/users/signup', formData);
      navigate('/login');
      alert('Please check your email to verify your account');
    } catch (error) {
      console.error('Error registering user:', error.response?.data || error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const openanAlert = () => {
    alert('Please check your email to verify your account');
  }

  return (
    <>
      <Header showLinks={false} />
      <div className='maincontainer1'>
        <div className="login-container">
          <form className="login-form d-flex" onSubmit={handleSubmit}>
            <h2 className="login-title">Sign Up</h2>
            <div className="mb-4">
              <label htmlFor="firstName" className="login-label">First Name</label>
              <input type="text" className="form-input" id="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="login-label">Last Name</label>
              <input type="text" className="form-input" id="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="login-label">Email address</label>
              <input type="email" className="form-input" id="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="login-label">Phone</label>
              <input type="tel" className="form-input" id="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="mb-4 password-container">
              <label htmlFor="password" className="login-label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-input password-input"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <i
                className={`eye-icon fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
            <div className="mb-4 password-container">
              <label htmlFor="confirmPassword" className="login-label">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-input password-input"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <i
                className={`eye-icon fas ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={toggleConfirmPasswordVisibility}
              ></i>
              {formErrors.confirmPassword && <div className="text-red-500">{formErrors.confirmPassword}</div>}
            </div>
            <button type="submit" className="btn-primary w-full py-2 rounded-md text-white font-semibold" onChange={openanAlert}>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
