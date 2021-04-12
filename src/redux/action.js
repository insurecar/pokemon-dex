import axios from "axios";

export const LOAD_POKEMONS = "LOAD_POKEMONS";
export const LOAD_CHARACTERISTIC = "LOAD_CHARACTERISTIC";

const loadPokemons = (pokemons) => {
  return {
    type: LOAD_POKEMONS,
    payload: pokemons,
  };
};

const loadCharacteristic = (characteristic) => {
  return {
    type: LOAD_CHARACTERISTIC,
    payload: characteristic,
  };
};

export const asyncLoadCharacteristic = (url) => (dispatch) =>
  axios.get(url).then((response) => {
    console.log(response.data);
    dispatch(loadCharacteristic(response.data));
  });

export const asyncLoadPokemons = () => (dispatch) =>
  axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=20}")
    .then((response) => dispatch(loadPokemons(response.data.results)));
