"use client"
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <div className="register-content">
        <h1>Let's get Started!</h1>
        <p>Create a new account with us...</p>
        <input type="text" placeholder="Name" required/>
        <input type="email" placeholder="Email" required/>
        <input type="tel" placeholder="Phone" required/>
        <button className="register-button" onClick={() => navigate('/conversation')}>
          Register
        </button>
        <button className="google-button">
          G Register with google
        </button>
        <p className="login-link">
          Already have an account? <span onClick={() => navigate('/login')}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;