import axios from "axios";

export const LOAD_POKEMONS = "LOAD_POKEMONS";

const loadPokmons = (pokemons) => {
  return {
    type: LOAD_POKEMONS,
    payload: pokemons,
  };
};

export const asyncLoadPokemons = () => (dispatch) =>
  axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=20}")
    .then((response) => dispatch(loadPokmons(response.data.results)));
