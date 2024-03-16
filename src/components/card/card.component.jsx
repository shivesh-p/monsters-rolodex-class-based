import React, { Component } from "react";
import "./card.styles.css";
export default class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=any&size=180x180`}
          alt={`${name}`}
        />
        <h2>
          <em> {name}</em>
        </h2>
        <p>{email}</p>
      </div>
    );
  }
}
