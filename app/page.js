"use client"; // Keep this if using Next.js; remove if using Create React App

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetStarted from './components/GetStarted';
import Login from './components/Login';
import Register from './components/Register';
import Conversation from './components/Conversation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/conversation" element={<Conversation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;