"use client"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Conversation.css';

const Conversation = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hey! How are you?', sender: 'Abhi' },
    { id: 2, text: 'I’m good, thanks! How about you?', sender: 'You' },
    { id: 3, text: 'Doing great! Want to catch up later?', sender: 'Abhi' },
    { id: 4, text: 'Sure, sounds good!', sender: 'You' },
    { id: 5, text: 'Sure, sounds good!', sender: 'Abhi' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: 'You' }]);
    setNewMessage('');
  };

  return (
    <div className="conversation-container" /*style={{ backgroundImage: `url(${waveBg})` }}*/>
      {/* Header */}
      <div className="conversation-header">
        <div className="back-arrow" onClick={() => navigate('/')}>←</div>
        <div className="contact-info">
          <div className="contact-icon">❤️</div>
          <div>
            <div className="contact-name">Abhi</div>
            <div className="contact-status">Active</div>
          </div>
        </div>
        <div className="header-icons">
          <span className="icon">📞</span>
          <span className="icon">📹</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="conversation-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === 'Abhi' ? 'received' : 'sent'}`}
          >
            {message.sender === 'Abhi' && <div className="message-icon">❤️</div>}
            <div className="message-text">{message.text}</div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="conversation-input">
        <span className="input-icon">😊</span>
        <input
          type="text"
          placeholder="Message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <div className="input-icons">
          <span className="icon">➕</span>
          <span className="icon">📷</span>
          <span className="icon">🖼️</span>
          <span className="icon">🎙️</span>
        </div>
      </div>
    </div>
  );
};

export default Conversation;