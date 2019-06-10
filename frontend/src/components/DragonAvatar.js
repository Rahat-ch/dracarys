import React, { Component } from "react";
import DragonImg from "./DragonImg";

class DragonAvatar extends Component {
  render() {
    const { generationId, dragonId, traits } = this.props.dragon;
    const element = () => {
      if (traits.length > 0) {
        return traits[0].traitValue;
      }
    };

    return (
      <div>
        <div>
          <span>G{generationId}. </span>
          <span>I{dragonId}. </span>
          {traits.map(trait => trait.traitValue).join(",")}
          <DragonImg element={element()} />
        </div>
      </div>
    );
  }
}

export default DragonAvatar;
