// components/PostCard.jsx
// This component displays a single post with an image, caption, and actions like like and comment.
import React from 'react';
import './PostCard.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';


const [posts, setPosts] = React.useState([
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    caption: 'This is a sample post',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    caption: 'Another sample post',
  },
]);

const handleShare = (postId) => {
  // Logic to handle sharing a post
  console.log(`Shared post with id: ${postId}`);

};

const handleLike = (postId) => {
  // Logic to handle liking a post
  console.log(`Liked post with id: ${postId}`);
};
const handleComment = (postId) => {
  // Logic to handle commenting on a post
  console.log(`Commented on post with id: ${postId}`);
};



export default function PostCard({ post }) {
    return (
      // handle post card 
      <div className="post-card">
        <img src={post.image} alt={post.caption} className="post-image" />
        <p>{post.caption}</p>
        <div className="post-actions">

          <button onClick={() => handleShare(post.id)}>Share</button>
          <button onClick={() => handleLike(post.id)}>Like</button>
          <button onClick={() => handleComment(post.id)}>Comment</button>
        </div>
      </div>
    );
  }