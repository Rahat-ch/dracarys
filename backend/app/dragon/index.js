const TRAITS = require("../../data/traits");

const DEFAULT_PROPERTIES = {
  nickname: "unamed",
  generationID: undefined,
  get birthdate() {
    return new Date();
  },
  get randomTraits() {
    const traits = [];

    TRAITS.forEach(TRAIT => {
      const traitType = TRAIT.type;
      const traitValues = TRAIT.values;

      const traitValue =
        traitValues[Math.floor(Math.random() * traitValues.length)];

      traits.push({ traitType, traitValue });
    });
    return traits;
  }
};

//empty object allows for no arguments to be passed an an emptry object to be created
class Dragon {
  constructor({ birthdate, nickname, traits, generationID } = {}) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    this.generationID = generationID || DEFAULT_PROPERTIES.generationID;
  }
}

module.exports = Dragon;
