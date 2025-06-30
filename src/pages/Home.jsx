import React from 'react'
const Home = () => {
  // This is the Home component that serves as the landing page of the application.

  const handleAboutProfileClick = () => {
    // Logic to handle the click event, e.g., navigate to the about profile page
    console.log("About profile button clicked");
    // You can use a router or any other method to navigate to the about profile page
  }
  // Add the click event handler to the button
  const handleButtonClick = () => {
    handleAboutProfileClick();
  }

  return (
    <>
    <h1>
      Welcome to the Minimalist Social Media App
    </h1>
    <p>
      This is a simple social media application built with React. You can navigate through different pages using the links in the navigation bar.
    </p>
    
    </>
  )
}
export default Home;