import React from "react";
import Search from "@mui/icons-material/Search";

const SearchBar = ({ value, onChange }) => {
  return (
    <div>
      <Search  />
      <input
        type="text"
        placeholder="Search Tools"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
