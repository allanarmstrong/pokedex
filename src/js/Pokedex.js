import React, { useEffect, useState } from "react";
import PokeList from "./Components/PokeList";
import Loader from "./Components/Loader";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState({
    count: 0,
    results: []
  });

  const fetchPokemon = () => {
    if (pokemon.results.length) return;
    const pokedex = localStorage.getItem("pokedex");
    if (!pokedex) {
      fetch(`${CONSTANTS.API_URL}/pokemon/?limit=${CONSTANTS.POKEMON_COUNT}`)
        .then(res => res.json())
        .then(json => {
          CONSTANTS.POKEMON = json.results;
          localStorage.setItem("pokedex", JSON.stringify(json));
          setPokemon(json);
        });
    } else {
      CONSTANTS.POKEMON = JSON.parse(pokedex).results;
      setPokemon(JSON.parse(pokedex));
    }
  };
  useEffect(() => {
    fetchPokemon();
  });

  return (
    <div>
      {pokemon.results.length === 0 ? (
        <Loader />
      ) : (
        <PokeList pokemon={pokemon} />
      )}
    </div>
  );
};

export default Pokedex;
