// components/UserProfile.jsx
// This component displays a user's profile with their avatar, username, and bio.
import React from 'react';
export default function UserProfile({ user }) {
    return (
      <div className="user-profile">
        {/* about user detail */}
        <img src={user.avatar} alt={`${user.username}'s avatar`} className="avatar" />
        <h2>{user.username}</h2>
        <p>{user.bio}</p>
      </div>
    );
  }