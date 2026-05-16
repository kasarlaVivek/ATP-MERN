function CountryCard({ country }) {
  return (
    <div className="country-card">
      <div className="country-flag-container">
        <img 
          src={country.flags.png} 
          alt={country.name.common} 
          className="country-flag" 
        />
      </div>
      <div className="country-info">
        <h2 className="country-name">{country.name.common}</h2>
        <div className="info-row">
          <span className="info-label">Capital:</span>
          <span className="info-value">{country.capital?.[0] || "N/A"}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Region:</span>
          <span className="info-value">{country.region}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Population:</span>
          <span className="info-value">{country.population.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;