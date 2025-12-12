var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    var hitZoneSize = 25;
    var damageFromObstacle = 20;
    function createPhantom(x, y) {
      var sawBladeHitZone = game.createObstacle(
        hitZoneSize,
        damageFromObstacle
      );
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      var phantom = draw.bitmap("img/phantomSmall.png");
      phantom.x = -25;
      phantom.y = -25;
      // phantom.scaleX =
      // phantom.scaleY =
      sawBladeHitZone.addChild(phantom);
    }
    createPhantom(600, 180);
    createPhantom(900, 180);
    createPhantom(1200, 180);
    function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 25);
      var zombie = draw.bitmap("img/zombie.png");
      zombie.x = -25;
      zombie.y = -25;
      enemy.addChild(zombie);
      enemy.x = x;
      enemy.y = y;
      enemy.velocityX = -5;
      enemy.onPlayerCollision = function collide() {
        game.changeIntegrity(-20);
      };
      enemy.onProjectileCollision = function projectileCollide() {
        game.increaseScore(100);
        enemy.flyTo(enemy.x, 500);
      };
      game.addGameItem(enemy);
    }
    createEnemy(1000, 250);
    createEnemy(2000, 250);
    createEnemy(3000, 250);
    function createReward(x, y) {
      var reward = game.createGameItem("reward", 25);
      var cow = draw.bitmap("img/cow.png");
      cow.x = -25;
      cow.y = -25;
      reward.addChild(cow);
      reward.x = x;
      reward.y = y;
      reward.onPlayerCollision = function Collide2 () {
        game.increaseScore(500);
      }
      reward.onProjectileCollision = function projectileCollide2(){
        reward.flyTo(reward.x, 500);
      }
      game.addGameItem("reward");
    }
    createReward(1250, 150);
    function createMarker() {
      onPlayerCollision = startLevel();
      onProjectileCollision = startLevel();
    }
    function startLevel() {
      // TODO 13 goes below here

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
