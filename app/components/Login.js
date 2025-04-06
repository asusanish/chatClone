"use client"
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="logo">SYNCQ</div>
        <h1>Login Here</h1>
        <p>Continue with your previous account...</p>
        <input type="text" placeholder="Name" />
        <input type="tel" placeholder="Phone" />
        <button className="login-button" onClick={() => navigate('/conversation')}>
          Login
        </button>
        <button className="google-button">
          G Login with google
        </button>
        <p className="register-link">
          Don't have an account? <span onClick={() => navigate('/register')}>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;