import React from "react";
import "./card.styles.css";
export default function Card(props) {
  const { id, name, email } = props.monster;
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
