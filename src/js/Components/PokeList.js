import React from "react";
import PropTypes from "prop-types";

import PokeCard from "./PokeCard";

const PokeList = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div>
      <p>
        There are {pokemon.count} Pokemon in the world! Which one do you want to
        learn about?
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
