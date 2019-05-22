const Dragon = require("./dragon");

const drogon = new Dragon({
  birthdate: new Date(),
  nickname: "Drogon",
  traits: [{ traitType: "element", traitValue: "sky" }]
});

const rhaegal = new Dragon({
  birthdate: new Date(),
  nickname: "Rhaegal"
});

const bruh = new Dragon();

setTimeout(() => {
  const notBruh = new Dragon();
  console.log("notbruh", notBruh);
}, 3000);

console.log("drogon", drogon);
console.log("rhaegal", rhaegal);
console.log("bruh", bruh);
