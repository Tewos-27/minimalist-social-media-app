import React from 'react'
const Profile = () => {
  return (
    <>
      <div className="profile-page">
        <h1>User Profile</h1>
        {/* User profile details will go here */}
        <div className="user-profile">
          <img src="https://via.placeholder.com/150" alt="User Avatar" className="avatar" />
          <h2>Username</h2>
          <p>Bio: This is a sample bio.</p>
        </div>
        {/* User posts will go here */}
        <div className="user-posts">
          <h3>User Posts</h3>
          {/* Example post card */}
          <div className="post-card">
            <img src="https://via.placeholder.com/300" alt="Post Image" className="post-image" />
            <p>Caption for the post.</p>
            <div className="post-actions">
              <button>Like</button>
              <button>Comment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Profile