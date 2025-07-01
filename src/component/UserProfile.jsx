// components/UserProfile.jsx
// This component displays a user's profile with their avatar, username, and bio.
import React, { useState } from 'react';
import './UserProfile.css'; // Assuming you have a CSS file for styling

const [user, setUser] = useState({
  username: "",
  email: "",
  bio: "",
  avatar: "https://via.placeholder.com/150",
  posts: [],
  followers: [],
  following: [],
  createdAt: new Date(),
  updatedAt: new Date(),

});

const [isEditing, setIsEditing] = useState(false);

export default function UserProfile({ user }) {
    return (
      <div className="user-profile">
        {/* about user detail */}

        <img src={user.avatar} alt={`${user.username}'s avatar`} className="user-avatar" />
        <h2>{user.username}</h2>
        <h2>{user.email}</h2>
        <p>{user.bio}</p>
        <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
        <p>Last updated: {new Date(user.updatedAt).toLocaleDateString()}</p>
        <div className="user-stats">
          <p>Posts: {user.posts.length}</p>
          <p>Followers: {user.followers.length}</p>
          <p>Following: {user.following.length}</p>
        </div>

        
        {/* Edit Profile Button */}
        <button onClick={() => setIsEditing(!isEditing)} className="edit-profile-button">
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
        {/* Edit Profile Form */}
        {isEditing && (
          <form className="edit-profile-form">
            <label>
              Username:
              <input
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </label>
            <label>
              Bio:
              <textarea
                value={user.bio}
                onChange={(e) => setUser({ ...user, bio: e.target.value })}
              />
            </label>
            <button type="submit" className="save-profile-button">Save</button>
          </form>
        )}
      </div>
    );
  }