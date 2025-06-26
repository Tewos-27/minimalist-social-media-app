// components/CommentSection.jsx
import { useState } from "react";
export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
 
  // function to handle the comment

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && newComment.trim()) {
      handleAddComment();
    }
  };
  
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="comment-section">
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment..."
      />
      <button onClick={handleAddComment}>Post</button>
    </div>
  );
}