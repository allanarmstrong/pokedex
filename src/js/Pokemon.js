import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "@reach/router";
import StatList from "./Components/StatList";
import PokemonDetails from "./Components/PokemonDetails";
import Loader from "./Components/Loader";
import { capitalise, leadingZeroes } from "./utils";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 0px;
`;

const Name = styled.h1`
  font-family: "Press Start 2P", sans-serif;
  font-size: 20px;
  margin: 10px 0;
`;

const ID = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Image = styled.img`
  height: 250px;
`;

const Meta = styled.div`
  @media screen and (max-width: 768px) {
    align-self: flex-start;
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  grid-area: 1 / 1 / 2 / 4;

  @media screen and (max-width: 768px) {
    grid-area: 1 / 1 / 2 / 7;
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Type = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
`;

const Stats = styled.div`
  grid-area: 1 / 4 / 2 / 6;
  align-self: center;

  @media screen and (max-width: 768px) {
    grid-area: 2 / 1 / 3 / 7;
  }
`;

const Content = styled.div`
  grid-area: 2 / 1 / 6 / 7;

  @media screen and (max-width: 768px) {
    grid-area: 3 / 1 / 6 / 7;
  }
`;

const Pokemon = ({ name }) => {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    if (pokemon) return;
    fetch(`${CONSTANTS.API_URL}/pokemon/${name.toLowerCase()}`)
      .then(res => res.json())
      .then(json => {
        setPokemon(json);
      })
      .catch(err => {
        setPokemon({});
      });
  });
  if (!pokemon) return <Loader />;
  const missingPokemon =
    Object.entries(pokemon).length === 0 && pokemon.constructor === Object;
  if (missingPokemon) {
    return (
      <div>
        <h1>Could not find pokemon: {name}</h1>
        Return to the <Link to="/">Pokedex</Link>
      </div>
    );
  }
  const types = pokemon.types
    .sort((a, b) => a.slot - b.slot)
    .map(({ type }) => capitalise(type.name))
    .join(" / ");
  return (
    <Container>
      <Details>
        <Meta>
          <ID>#{leadingZeroes(pokemon.id)}</ID>
          <Name>{capitalise(pokemon.name)}</Name>
          <Type>{types}</Type>
        </Meta>
        <Image src={pokemon.sprites.front_default} />
      </Details>
      <Stats>
        <StatList stats={pokemon.stats.reverse()} />
      </Stats>
      <Content>
        <PokemonDetails pokemon={pokemon} />
      </Content>
    </Container>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string
};

export default Pokemon;
