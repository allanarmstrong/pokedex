import React from "react";
import ReactDOM from "react-dom";
import Pokedex from "./Pokedex";

window.CONSTANTS = {
  API_URL: `https://pokeapi.co/api/v2`,
  POKEMON_SPRITES: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`
};

ReactDOM.render(<Pokedex />, document.getElementById("app"));
