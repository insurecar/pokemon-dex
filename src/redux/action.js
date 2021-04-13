import axios from "axios";

export const LOAD_POKEMONS = "LOAD_POKEMONS";
export const LOAD_CHARACTERISTIC = "LOAD_CHARACTERISTIC";

const loadPokemons = (pokemons) => {
  return {
    type: LOAD_POKEMONS,
    payload: pokemons,
  };
};

// const loadCharacteristic = (characteristic) => {
//   return {
//     type: LOAD_CHARACTERISTIC,
//     payload: characteristic,
//   };
// };

// export const asyncLoadCharacteristic = (url) => (dispatch) =>
//   axios.get(url).then((response) => {
//     dispatch(loadCharacteristic(response.data));
//   });

export const asyncLoadPokemons = () => async (dispatch) => {
  const pokemons = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?limit=20"
  );
  const response = await Promise.all(
    pokemons.data.results.map((item) => axios.get(item.url))
  );
  console.log(pokemons);
  dispatch(
    loadPokemons(
      response.map((item) => ({
        ...pokemons.data.results.find((p, index) => item.data.id === index + 1),
        characteristics: item.data,
      }))
    )
  );
};
// axios
//   .get("https://pokeapi.co/api/v2/pokemon/?limit=20}")
//   .then((response) => dispatch(loadPokemons(response.data.results)));
