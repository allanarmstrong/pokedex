import React from "react";
import PropTypes from "prop-types";

const capitaliseName = name =>
  name.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1));

const getPokemonSprite = id => `${CONSTANTS.POKEMON_SPRITES}/${id}.png`;

const Pokecard = ({ pokemon, id }) => {
  return (
    <div>
      <img src={getPokemonSprite(id)} />
      {capitaliseName(pokemon.name)}
    </div>
  );
};

const PokeList = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div>
      <p>
        There are {pokemon.count} Pokemon in the world! Which one do you want to
        learn about?
      </p>
      {pokemon.results.map((pokemon, index) => (
        <Pokecard key={index} pokemon={pokemon} id={index + 1} />
      ))}
    </div>
  );
};

Pokecard.propTypes = {
  pokemon: PropTypes.object,
  id: PropTypes.number
};

PokeList.propTypes = {
  pokemon: PropTypes.object
};

export default PokeList;
