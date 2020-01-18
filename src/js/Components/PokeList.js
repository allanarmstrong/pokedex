import React from "react";
import PropTypes from "prop-types";
import PokeCard from "./PokeCard";

const PokeList = ({ pokemon }) => {
  return (
    <div>
      <p>
        There are {CONSTANTS.POKEMON_COUNT} Pokemon in the world! Which one do
        you want to learn about?
      </p>
      {pokemon.results.map((pokemon, index) => (
        <PokeCard key={index} pokemon={pokemon} id={index + 1} />
      ))}
    </div>
  );
};

PokeList.propTypes = {
  pokemon: PropTypes.object
};

export default PokeList;
