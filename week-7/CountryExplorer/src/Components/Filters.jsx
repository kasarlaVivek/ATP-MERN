import React from 'react';

const Filters = ({ region, setRegion, sort, setSort }) => {
  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <div className="filters-container">
      <div className="filter-group">
        <label htmlFor="region-filter">Filter by Region</label>
        <select
          id="region-filter"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="filter-select"
        >
          {regions.map((r) => (
            <option key={r} value={r === 'All' ? '' : r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="sort-filter">Sort by</label>
        <select
          id="sort-filter"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="filter-select"
        >
          <option value="name">Name (A-Z)</option>
          <option value="population-desc">Population (High to Low)</option>
          <option value="population-asc">Population (Low to High)</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
