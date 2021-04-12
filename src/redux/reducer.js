import { LOAD_POKEMONS, LOAD_CHARACTERISTIC } from "./action";

const initialState = {
  pokemons: [],
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POKEMONS:
      return {
        ...state,
        pokemons: state.pokemons.concat(action.payload),
      };
    case LOAD_CHARACTERISTIC: {
      const pokemonsUpdated = state.pokemons.map((item, index) =>
        action.payload.id === index + 1
          ? {
              ...item,
              characteristics: { ...action.payload },
            }
          : item
      );
      return {
        ...state,
        pokemons: pokemonsUpdated,
      };
    }
    default:
      return state;
  }
};
