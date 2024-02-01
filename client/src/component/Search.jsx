import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState();
  const { handleCategoryChange, blogs } = useGlobalContext();
  const navigate = useNavigate();
  const handleSearchTerm = (e) => {
    e.preventDefault();
    let matchSearchTerm = searchTerm.toLowerCase();

    if (
      matchSearchTerm == "ai" ||
      matchSearchTerm == "tech" ||
      matchSearchTerm === "growth" ||
      matchSearchTerm === "apps" ||
      matchSearchTerm === "startups" ||
      matchSearchTerm === "health" ||
      matchSearchTerm === "security" ||
      matchSearchTerm === "enterprise" ||
      matchSearchTerm === "fintech" ||
      matchSearchTerm === "work"
    ) {
      handleCategoryChange(matchSearchTerm);
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
