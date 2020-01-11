import React, { useEffect, useState } from "react";
import PokeList from "./Components/PokeList";
import Loader from "./Components/Loader";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState({
    count: 0,
    results: []
  });

  useEffect(() => {
    const endpoint = `${window.CONSTANTS.API_URL}/pokemon/?limit=807`;
    if (pokemon.results.length > 0) return;
    fetch(endpoint)
      .then(res => res.json())
      .then(res => setPokemon(res));
  }, [pokemon]);
  return (
    <div>
      {pokemon.length === 0 ? <Loader /> : <PokeList pokemon={pokemon} />}
    </div>
  );
};

export default Pokedex;
