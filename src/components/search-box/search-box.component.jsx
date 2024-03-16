import React, { Component } from "react";
import "./search-box.styles.css";
export default class SearchBox extends Component {
  render() {
    const { filterMonsters, placeholder, className } = this.props;
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
}
