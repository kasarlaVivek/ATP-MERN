import { useEffect, useRef } from "react";

function SearchBar({ onSearch, query }) {
    const inputRef = useRef(null);

    // Auto-focus on page load
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className="search-container">
            <input
                ref={inputRef}
                type="text"
                placeholder="Search for a country..."
                className="search-input"
                value={query}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;