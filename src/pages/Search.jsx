import React from 'react'
const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearchChanges = (event) => {
    setSearchTerm(event.target.value);
    // You can add logic here to filter or search through friends based on the searchTerm
    console.log("Searching for:", event.target.value);
  }

  return (
    <>
      <h2>search bar</h2>
      <input
        type="text"
        placeholder="Search friends..."
        value={searchTerm}
        onChange={handleSearchChanges}
        className="search-input"
      />
      
    </>
  )
}
export default Search