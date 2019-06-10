import React from "react";
import { earth, fire, sky, water } from "../images";

const dragon = {
  earth: <img className="dragon" src={earth} alt="earth" />,
  fire: <img className="dragon" src={fire} alt="fire" />,
  sky: <img className="dragon" src={sky} alt="sky" />,
  water: <img className="dragon" src={water} alt="water" />
};

const DragonImg = ({ element }) => {
  return <div>{dragon[element]}</div>;
};

export default DragonImg;
