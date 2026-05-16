import CountryCard from "./CountryCard";

function CountryList({ countries }) {
  if (!countries || countries.length === 0) {
    return <p className="status-text">No countries to display.</p>;
  }

  return (
    <div className="country-grid">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}

export default CountryList;