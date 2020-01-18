import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";

window.CONSTANTS = {
  API_URL: `https://pokeapi.co/api/v2`,
  POKEMON_SPRITES: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`,
  POKEMON_COUNT: 807,
  POKEMON: []
};

ReactDOM.render(
  <Router>
    <Pokedex path="/" />
    <Pokemon path="/pokemon/:name" />
  </Router>,
  document.getElementById("app")
);
