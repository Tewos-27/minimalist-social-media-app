// components/PostCard.jsx
export default function PostCard({ post }) {
    return (
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