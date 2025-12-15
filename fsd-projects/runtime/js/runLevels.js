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
      reward.velocityX = -5;
      reward.onPlayerCollision = function collide2() {
        game.increaseScore(500);
        reward.fadeOut();
      };
      reward.onProjectileCollision = function projectileCollide2() {
        reward.fadeOut();
      };
      game.addGameItem(reward);
    }
    createReward(4250, 250);
    function createMarker(x, y) {
      var marker = game.createGameItem("marker", 25);
      var portal = draw.bitmap("img/nether.png");
      portal.x = -90;
      portal.y = -120;
      marker.addChild(portal);
      marker.x = x;
      marker.y = y;
      marker.velocityX = -4;
      marker.onPlayerCollision = function start() {
        startLevel();
      };
      marker.onProjectileCollision = function start2() {
        startLevel();
      };
      game.addGameItem(marker);
    }
    createMarker(5250, 250);
    function startLevel() {
      // TODO 13 goes below here
      var level = levelData.currentLevel;
      var levelObjects = levelData.gameItems;
      for (var i = 0; i < levelObjects.length; i++) {
        var eachElement = levelObjects[i];
        if(levelObjects.type = "sawblade"){
        createPhantom(phantom.x, phantom.y);
        }else if(levelObjects.type = "enemy"){
        createEnemy(enemy.x, enemy.y);
        }else if(levelObjects.type = "reward"){
        createReward(reward.x, reward.y);
        }else if(levelObjects.type = "marker"){
        createMarker(marker.x, marker.y);
        }
      }
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
