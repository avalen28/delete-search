import React from "react";

const SearchInput = ({ handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="what can I do for you?"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
