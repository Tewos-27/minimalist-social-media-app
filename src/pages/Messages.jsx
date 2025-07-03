import React from 'react';
import {useState} from 'react';

const [messages, setMessages] = useState([]);
const [newMessage, setNewMessage] = useState("");

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
      <div className="message-form">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
          className="message-textarea"
        />
        <button onClick={() => {
          if (newMessage.trim()) {
            setMessages([...messages, newMessage]);
            setNewMessage("");
          }
        }} className="send-message-button">Send</button>
      </div>
    </>
  )
}
export default Messages