import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { capitalise } from "../utils";

const EvolutionsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const EvolutionGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Evolution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Evolutions = ({ initialEvolution }) => {
  const constructEvolutionList = evolution => {
    const evolutionId = CONSTANTS.POKEMON.findIndex(
      pokemon => pokemon.name === evolution.species.name
    );
    const pokemonImage = `${CONSTANTS.POKEMON_SPRITES}/${evolutionId + 1}.png`;
    return (
      <React.Fragment key={evolutionId}>
        <Evolution>
          <a href={`/pokemon/${evolution.species.name}`}>
            <img src={pokemonImage} width="200" alt={evolution.species.name} />
          </a>
          {capitalise(evolution.species.name)}
        </Evolution>
        <EvolutionGroup>
          {evolution.evolves_to.map(evolution =>
            constructEvolutionList(evolution)
          )}
        </EvolutionGroup>
      </React.Fragment>
    );
  };

  return (
    <>
      <h3>Evolutions</h3>
      <EvolutionsContainer>
        {constructEvolutionList(initialEvolution)}
      </EvolutionsContainer>
    </>
  );
};

Evolutions.propTypes = {
  initialEvolution: PropTypes.object
};

export default Evolutions;
