import axios from "axios";
import { useEffect, useState, useReducer } from "react";
import { colors } from "./color";
// import { initialState, reducer } from "./useReducer/useReducer";
import { useSelector, useDispatch } from "react-redux";
import { asyncLoadCharacteristic } from "./redux/action";

const Pokemon = ({ pokemon: { name, url } }) => {
  const initialState = {
    stats: [],
    types: [],
    id: "",
    weight: "",
    name: "",
  };

  const dispatch = useDispatch();

  const state = useSelector((state) => state.mainReducer.characteristics);
  console.log(state);

  // const [data, setData] = useState(initialState);
  // console.log(state);

  useEffect(() => {
    dispatch(asyncLoadCharacteristic(url));
    // axios.get(url).then((response) => {
    //   const { stats, types, id, name, weight } = response.data;
    //   setData({
    //     stats: stats.map((el) => el.base_stat),
    //     types: types.map((el) => el.type.name),
    //     id: id,
    //     name,
    //     weight,
    //   });
    // });
  }, []);

  return (
    <li className="item">
      {/* <div className="item__image">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
          alt="as"
        />
      </div>
      <div className="item__name">{data.name}</div>
      <div className="item__possibility">
        {data.types.map((el, index) => (
          <span key={el + index} style={{ background: `${colors[el]}` }}>
            {el}
          </span>
        ))}{" "}
      </div> */}
    </li>
  );
};

export default Pokemon;
