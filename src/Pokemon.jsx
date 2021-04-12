import axios from "axios";
import { useEffect, useState } from "react";
import { colors } from "./color";

const Pokemon = ({ pokemon: { name, url } }) => {
  const initialState = {
    stats: [],
    types: [],
    id: "",
    weight: "",
    name: "",
  };
  const [data, setData] = useState(initialState);
  console.log(data.id);

  useEffect(() => {
    axios.get(url).then((response) => {
      const { stats, types, id, name, weight } = response.data;
      setData({
        stats: stats.map((el) => el.base_stat),
        types: types.map((el) => el.type.name),
        id: id,
        name,
        weight,
      });
    });
  }, []);

  return (
    <li className="item">
      <div className="item__image">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
          alt="as"
        />
      </div>
      <div className="item__name">{data.name}</div>
      <div className="item__possibility">
        {/* <span>jsdnjn</span>
        <span>jsdnjn</span> */}
        {data.types.map((el) => (
          <span style={{ background: `${colors[el]}` }}>{el}</span>
        ))}
      </div>
    </li>
  );
};

export default Pokemon;
