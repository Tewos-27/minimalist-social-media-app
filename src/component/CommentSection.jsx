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
  
  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
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
        onKeyPress={handleKeyPress}
        placeholder="Add a comment..."
      />
      <button onClick={handleAddComment}>send</button>
      <div className="comment-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <span>{comment}</span>
            <button onClick={() => handleDeleteComment(index)}>Delete</button>
          </div>
        ))}
       </div>
    </div>
  );
}