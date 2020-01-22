import React from "react";
import PropTypes from "prop-types";
import RightArrow from "./RightArrow";

import styled from "styled-components";
import { capitalise } from "../utils";

const EvolutionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 0px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    grid-row-gap: 40px;
  }
`;

const EvolutionGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  align-content: center;

  ${props =>
    props.level == 1 && props.totalLevels === 2 && "grid-area: 1 / 2 / 1 / 4;"}

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    ${props =>
      props.level == 1 &&
      props.totalLevels === 2 &&
      "grid-area: 2 / 2 / 3 / 4;"}
  }
`;

const Evolution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  position: relative;

  @media screen and (max-width: 768px) {
    margin-top: var(--gutter);
  }
`;

const Arrow = styled.div`
  position: absolute;
  height: 50%;
  top: 50%;
  left: -50%;
  height: 60px;
  transform: translate(0, -50%);

  @media screen and (max-width: 768px) {
    left: 50%;
    top: 0;
    transform: rotate(90deg) translate(-75%, 50%);
    transform-origin: center center;
  }
`;

const ArrowRight = styled.div`
  position: absolute;
  height: 50%;
  top: 50%;
  right: -50%;
  height: 60px;
  transform: translate(0, -50%);
`;

const EvolutionContainer = ({ evolution, level, totalLevels }) => {
  const evolutionId = CONSTANTS.POKEMON.findIndex(
    pokemon => pokemon.name === evolution.species.name
  );
  const pokemonImage = `${CONSTANTS.POKEMON_SPRITES}/${evolutionId + 1}.png`;

  return (
    <React.Fragment key={evolutionId}>
      <Evolution>
        {level >= 1 && totalLevels > 2 && (
          <Arrow>
            <RightArrow />
          </Arrow>
        )}
        <a href={`/pokemon/${evolution.species.name}`}>
          <img src={pokemonImage} width="200" alt={evolution.species.name} />
        </a>
        {capitalise(evolution.species.name)}
        {level === 0 && totalLevels === 2 && (
          <ArrowRight>
            <RightArrow />
          </ArrowRight>
        )}
      </Evolution>
    </React.Fragment>
  );
};

EvolutionContainer.propTypes = {
  evolution: PropTypes.shape({
    species: PropTypes.object
  }),
  level: PropTypes.number
};

const Evolutions = ({ initialEvolution }) => {
  const evolutions = [[initialEvolution]];
  evolutions.push(initialEvolution.evolves_to);
  initialEvolution.evolves_to.forEach(evolution => {
    return evolution.evolves_to.length && evolutions.push(evolution.evolves_to);
  });
  const totalEvolutionLevels = evolutions.length;
  return (
    <>
      <h3>Evolutions</h3>
      <EvolutionsContainer>
        {evolutions.map((evolution_level, level) => (
          <EvolutionGroup
            key={level}
            level={level}
            totalLevels={totalEvolutionLevels}
          >
            {evolution_level.map((evolution, variation) => (
              <EvolutionContainer
                level={level}
                evolution={evolution}
                key={variation + 1}
                totalLevels={totalEvolutionLevels}
              />
            ))}
          </EvolutionGroup>
        ))}
      </EvolutionsContainer>
    </>
  );
};

Evolutions.propTypes = {
  initialEvolution: PropTypes.object
};

export default Evolutions;
