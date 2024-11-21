import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { PublicRoutes } from '../models';
import { auth } from '../services/auth';
import IconHR from "../assets/icons/iconHR.svg"
import './login.css';

const LoginForm = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth(formData.username, formData.password);
      setLoggedIn(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogoClick = () => {
    navigate(`/ ${PublicRoutes.LANDING}`);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (loggedIn) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <div>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          
          <img className="iconoLogin" src={IconHR} onClick={handleLogoClick} style={{cursor: 'pointer'}}/>
          <h1 className="bienvenida">Bienvenido a HRMinder</h1>

          <div className="input-box">
            <FaUser className='icon' />
            <input type="text" name="username" placeholder="Usuario" value={formData.username} onChange={handleChange} required />
          </div>

          <div className="input-box">
            <FaLock className='icon'/>
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Login</button>
        </form>
        
      </div>
    </div>
  );
};

export default LoginForm;