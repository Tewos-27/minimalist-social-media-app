// components/SearchBar.jsx
import { useState } from "react";
import "./SearchBar.css"; // Assuming you have a CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    onSearch(query);
  };
}

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    onSearch(query);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}