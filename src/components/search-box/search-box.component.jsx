import React from "react";
import "./search-box.styles.css";
export default function SearchBox(props) {
  const { filterMonsters, placeholder, className } = props;
  return (
    <input
      className={className}
      type="search"
      name="search"
      id="search "
      placeholder={placeholder}
      onChange={filterMonsters}
    />
  );
}
