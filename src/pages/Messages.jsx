import React from 'react';
import {useState} from 'react';
const Messages = () => {
  return (
    <>
      <h2>Messages</h2>
      <p>This is the messages page where you can view and send messages to your friends.</p>
      <div className="messages-list">
        {/* Placeholder for messages */}
        <p>No messages yet. Start a conversation!</p>
      </div>
      <input type="text" placeholder="Type your message here..." className="message-input" />
      <button className="send-message">Send</button>
    </>
  )
}
export default Messages