import {useState, useEffect, useRef} from "react";
import SearchBar from "./Components/SearchBar";
import CountryList from "./Components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  
  // useRef to persist the timer ID for debouncing without re-renders
  const debounceTimer = useRef(null);

  const fetchCountries = async (searchQuery) => {
    setLoading(true);
    setError(null);
    try {
      const url = searchQuery 
        ? `https://restcountries.com/v3.1/name/${searchQuery}`
        : `https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,region`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error("Country not found");
      
      const data = await response.json();
      setCountries(data);
    } catch (err) {
      setError(err.message);
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  // Initial Fetch on Mount
  useEffect(() => {
    fetchCountries("");
  }, []);

  // Debounced Search Logic
  const handleSearch = (val) => {
    setQuery(val);
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      fetchCountries(val);
    }, 500); // Wait 500ms after user stops typing
  };

  return (
    <div className="app-container">
      <h1 className="header-title">Country Explorer</h1>
      
      <SearchBar onSearch={handleSearch} query={query} />

      {loading && (
        <div className="loader-container">
          <div className="spinner"></div>
          <p className="status-text" style={{margin: 0}}>Exploring countries...</p>
        </div>
      )}
      
      {error && !loading && (
        <div style={{textAlign: 'center'}}>
          <p className="error-text">Error: {error}</p>
        </div>
      )}
      
      {!loading && !error && <CountryList countries={countries} />}
    </div>
  );
}

export default App;