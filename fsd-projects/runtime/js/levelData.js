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
        name: "Overworld",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
          { type: "sawblade", x: 1200, y: groundY },
          { type: "enemy", x: 1000, y: 250 },
          { type: "enemy", x: 2000, y: 250 },
          { type: "enemy", x: 3000, y: 250 },
          { type: "reward", x: 4250, y: 250 },
          { type: "marker", x: 6000, y: 250 },
        ],
      },
      {
        name: "Nether",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
          { type: "enemy2", x: 1000, y: 250 },
          { type: "enemy2", x: 2000, y: 250 },
          { type: "enemy2", x: 3000, y: 250 },
          { type: "obstacle2", x: 500, y: 180 },
          { type: "obstacle2", x: 1500, y: 180 },
          { type: "obstacle2", x: 2750, y: 180 },
          { type: "reward2", x: 4250, y: 250 },
          { type: "marker2", x: 6000, y: 250 },
        ],
      },
      {
        name: "End",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
          { type: "enemy2", x: 1000, y: 250 },
          { type: "enemy2", x: 2000, y: 250 },
          { type: "enemy2", x: 3000, y: 250 },
          { type: "obstacle2", x: 500, y: 180 },
          { type: "obstacle2", x: 1500, y: 180 },
          { type: "obstacle2", x: 2750, y: 180 },
          { type: "reward2", x: 4250, y: 250 },
          { type: "marker2", x: 6000, y: 250 },
        ],
      },

      (window.opspark.levelData = levelData),
    ];
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
