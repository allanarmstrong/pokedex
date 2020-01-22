import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loader from "./Loader";
import Description from "./Description";
import Evolutions from "./Evolutions";

const PokemonDetails = ({ pokemon }) => {
  const [details, setDetails] = useState();

  const fetchDetails = async () => {
    if (details) return;
    const speciesDetails = await fetch(pokemon.species.url).then(res =>
      res.json()
    );
    const evolutionChain = await fetch(
      speciesDetails.evolution_chain.url
    ).then(res => res.json());
    speciesDetails.evolution_chain = evolutionChain;
    setDetails(speciesDetails);
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  if (!details) return <Loader />;
  const descriptions = details.flavor_text_entries
    .filter(flavor => flavor.language.name === "en")
    .reverse();
  const firstEvolution = details.evolution_chain.chain;
  return (
    <>
      <Description descriptions={descriptions} />
      <Evolutions initialEvolution={firstEvolution} />
    </>
  );
};

PokemonDetails.propTypes = {
  pokemon: PropTypes.object
};

export default PokemonDetails;
