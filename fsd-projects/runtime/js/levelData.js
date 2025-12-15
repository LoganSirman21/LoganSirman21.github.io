var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Wave 1",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 600, y: 180 },
          { type: "sawblade", x: 900, y: groundY },
          { type: "sawblade", x: 1200, y: 180 },
          { type: "sawblade", x: 2000, y: groundY },
          { type: "sawblade", x: 2500, y: 180 },
          { type: "enemy", x: 1000, y: 250 },
          { type: "enemy", x: 2000, y: 250 },
          { type: "enemy", x: 3000, y: 250 },
          { type: "reward", x: 4250, y: 250 },
          { type: "marker", x: 5000, y: 250 },
        ],
      },
      {
        name: "Wave 2",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: 180 },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 1200, y: 180 },
          { type: "sawblade", x: 1400, y: groundY },
          { type: "sawblade", x: 2000, y: 180 },
          { type: "enemy", x: 1000, y: 250 },
          { type: "enemy", x: 2000, y: 250 },
          { type: "enemy", x: 2500, y: 250 },
          { type: "enemy", x: 3000, y: 250 },
          { type: "enemy", x: 3500, y: 250 },
          { type: "obstacle", x: 500, y: 180 },
          { type: "obstacle", x: 1500, y: 180 },
          { type: "obstacle", x: 2750, y: 180 },
          { type: "reward", x: 4250, y: 250 },
          { type: "marker", x: 5000, y: 250 },
        ],
      },
      {
        name: "Wave 3",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: 180 },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 1200, y: 180 },
          { type: "sawblade", x: 1400, y: groundY },
          { type: "sawblade", x: 2000, y: 180 },
          { type: "sawblade", x: 3000, y: groundY },
          { type: "sawblade", x: 3200, y: 180 },
          { type: "sawblade", x: 3750, y: groundY },
          { type: "sawblade", x: 4000, y: 180 },
          { type: "sawblade", x: 4500, y: groundY },
          { type: "enemy", x: 1000, y: 250 },
          { type: "enemy", x: 2000, y: 250 },
          { type: "enemy", x: 2500, y: 250 },
          { type: "enemy", x: 3000, y: 250 },
          { type: "enemy", x: 3500, y: 250 },
          { type: "enemy", x: 4000, y: 250 },
          { type: "enemy", x: 4500, y: 250 },
          { type: "enemy", x: 4750, y: 250 },
          { type: "obstacle", x: 500, y: 180 },
          { type: "obstacle", x: 1500, y: 180 },
          { type: "obstacle", x: 2750, y: 180 },
          { type: "reward", x: 5500, y: 250 },
          { type: "marker", x: 6000, y: 250 },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
