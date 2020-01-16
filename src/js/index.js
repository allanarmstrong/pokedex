import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import Pokedex from "./Pokedex";

window.CONSTANTS = {
  API_URL: `https://pokeapi.co/api/v2`,
  POKEMON_SPRITES: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`,
  POKEMON_COUNT: 807
};

ReactDOM.render(
  <Router>
    <Pokedex path="/" />
  </Router>,
  document.getElementById("app")
);
