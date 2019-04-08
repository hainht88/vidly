import React from "react";

const SearchBox = ({ query, onChange }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={e => onChange(e.target.value)}
      name="search"
      className="form-control mb-4"
      id="search"
      placeholder="Search..."
    />
  );
};

export default SearchBox;
