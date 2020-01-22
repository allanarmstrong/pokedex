import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";
import NotFound from "./NotFound";

const localPokedex = localStorage.getItem("pokedex");

window.CONSTANTS = {
  API_URL: `https://pokeapi.co/api/v2`,
  POKEMON_SPRITES: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`,
  ITEM_SPRITES: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items`,
  POKEMON_COUNT: 807,
  POKEMON: []
};
if (localPokedex) {
  CONSTANTS.POKEMON = JSON.parse(localPokedex).results;
}

ReactDOM.render(
  <Router>
    <NotFound default />
    <Pokedex path="/" />
    <Pokemon path="/pokemon/:name" />
  </Router>,
  document.getElementById("app")
);
