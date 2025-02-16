// components/UserProfile.jsx
export default function UserProfile({ user }) {
    return (
      <div className="user-profile">
        <img src={user.avatar} alt={`${user.username}'s avatar`} className="avatar" />
        <h2>{user.username}</h2>
        <p>{user.bio}</p>
      </div>
    );
  }