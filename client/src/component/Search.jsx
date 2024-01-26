import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState();
  const { handleCategoryChange } = useGlobalContext();
  const navigate = useNavigate();
  const handleSearchTerm = (e) => {
    e.preventDefault();

    if (
      searchTerm === "ai" ||
      searchTerm === "tech" ||
      searchTerm === "growth" ||
      searchTerm === "apps" ||
      searchTerm === "startups" ||
      searchTerm === "health" ||
      searchTerm === "security" ||
      searchTerm === "enterprise" ||
      searchTerm === "fintech" ||
      searchTerm === "work"
    ) {
      handleCategoryChange(searchTerm.toLowerCase());
      navigate("/");
      setSearchTerm("");
      setSearchResult("");
    } else {
      setSearchResult("Please enter a valid category");
    }
  };
  return (
    <div>
      <div className="search">
        <form onSubmit={handleSearchTerm}>
          <div className="input-container">
            <input
              className="input"
              type="text"
              placeholder="Search category,eg. tech,security..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">search</button>
          </div>
        </form>
        <p className="error">{searchResult}</p>
      </div>
    </div>
  );
};
export default Search;
