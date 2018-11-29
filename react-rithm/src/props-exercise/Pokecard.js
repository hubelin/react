import React from 'react';

const Pokecard = props => {
  return (
    <div className="card">
      <h1 className="card-name">{props.name}</h1>
      <img src={props.image} alt="pokemon" />
      <h3>Type: {props.type}</h3>
    </div>
  );
};

export default Pokecard;
