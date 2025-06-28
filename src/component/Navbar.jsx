import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  }
  // Function to handle the click event on the "About profile" button
  const handleAboutProfileClick = () => {
    // Logic to handle the click event, e.g., navigate to the about profile page
    console.log("About profile button clicked");
    // You can use a router or any other method to navigate to the about profile page
  };
  return (
    <>
    {/* mapinf the navbar list */}
      <nav className="navbar">
        <div className="navbar-brand">
          
          <Link to="/">Social Media App</Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-link">Friends</Link>
          </li>
          <li className="nav-item">
            <Link to="/messages" className="nav-link">Messages</Link>
          </li>
          <button className="about-profile">About profile</button>
        </ul>
      </nav>
    </>
  )
}
export default Navbar