import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

const leadingZeroes = number => {
  var s = number + "";
  while (s.length < 3) s = "0" + s;
  return s;
};

const capitaliseName = name =>
  name
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const PokeCard = ({ pokemon, id }) => {
  const name = capitaliseName(pokemon.name);
  return (
    <Pokemon>
      <ID>{leadingZeroes(id)}</ID>
      <Name>{name}</Name>
    </Pokemon>
  );
};

PokeCard.propTypes = {
  pokemon: PropTypes.object,
  id: PropTypes.number
};

export default PokeCard;
