import React from 'react'
const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  
  return (
    <>
      <h2>search bar</h2>
      <input type="search" name="search" id="search" placeholder="search your friend" />
    </>
  )
}
export default Search