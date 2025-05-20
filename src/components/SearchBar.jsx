import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim() !== "") {
            onSearch(query);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Inserisci qui"
            />
            <button onClick={handleSearch}>Cerca</button>
        </div>
    );
};

export default SearchBar;