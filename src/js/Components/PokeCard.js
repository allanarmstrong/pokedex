import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import styled from "styled-components";
import { capitalise, leadingZeroes } from "../utils";

const Pokemon = styled.div`
  margin-bottom: var(--gutter);
`;

const Name = styled.h3`
  font-family: "Press Start 2P", sans-serif;
  font-size: 20px;
  margin: 0;
  margin-left: 20px;
`;

const ID = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PokeCard = ({ pokemon, id }) => {
  const name = capitalise(pokemon.name);
  return (
    <Pokemon>
      <ID>{leadingZeroes(id)}</ID>
      <Name>
        <Link to={`/pokemon/${pokemon.name}`}>{name}</Link>
      </Name>
    </Pokemon>
  );
};

PokeCard.propTypes = {
  pokemon: PropTypes.object,
  id: PropTypes.number
};

export default PokeCard;
