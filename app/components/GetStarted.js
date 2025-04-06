"use client"
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GetStarted.css';

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="get-started-container">
      <div className="get-started-content">
        <h1>Welcome, Abhi...</h1>
        <div className="logo">SG</div>
        <button className="start-button" onClick={() => navigate('/Register')}>
          Start
        </button>
      </div>
    </div>
  );
};

export default GetStarted;