import React,{ useState } from 'react';
import './profile,css'

const Profile = () => {
  const [user, setUser] = useState({
    name:'',
    email:'',
    feedback:''
  });

  const handleInput = (event) => {
    const {name, value} = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmMessage = `
    Name: ${user.name}
    Email: ${user.email}
    Feedback: ${user.feedback}
    `;

    const isConfirmed = window.confirm(`please confirm your feedback: /n/n${confirmMessage}`);

    if (isConfirmed) {
      alert('Feedback submitted successfully!');
      setUser({
        name:'',
        email:'',
        feedback:''
      });
    } else {
      alert('Feedback submission cancelled.');
    }
  }
  return (
    <>
    <nav>
      <h2> Enter you'r feed back!! </h2>
    </nav>

    <form  className="feedback-form" onSubmit={handleSubmit}>
      <h2>Thanks for tou'r feedback!</h2>
      <input type="text" name="name" id="name" placeholder="enter your name" value={user.name} onChange={handleInput} required/>
      <input type="email" name="email" id="email"  placeholder="enter your email" value={user.email} onChange={handleInput} required/>
      <textarea name="feedback" id="feedback" placeholder="enter your email" value={user.feedback} onChange={handleInput} required/>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default Profile