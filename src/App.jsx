import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pokemon from "./Pokemon";
import { asyncLoadPokemons } from "./redux/action";

const App = () => {
  const state = useSelector((state) => state.mainReducer.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLoadPokemons());
  }, []);

  return (
    <div className="container">
      <ul className="list__item">
        {state.map((pokemon, index) => (
          <Pokemon pokemon={pokemon} key={pokemon.name + index} />
        ))}
      </ul>
    </div>
  );
};

export default App;
