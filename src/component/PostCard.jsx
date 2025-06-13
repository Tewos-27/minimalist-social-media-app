// components/PostCard.jsx
// This component displays a single post with an image, caption, and actions like like and comment.
import React from 'react';
export default function PostCard({ post }) {
    return (
      // handle post card 
      <div className="post-card">
        <img src={post.image} alt={post.caption} className="post-image" />
        <p>{post.caption}</p>
        <div className="post-actions">
          <button>Like</button>
          <button>Comment</button>
        </div>
      </div>
    );
  }