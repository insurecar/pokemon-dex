import { LOAD_POKEMONS } from "./action";

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
    default:
      return state;
  }
};
