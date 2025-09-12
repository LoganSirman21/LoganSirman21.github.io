$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(350, 625, 100, 20, "white");
createPlatform(350, 500, 100, 20, "white");
createPlatform(350, 375, 100, 20, "white");
createPlatform(1050, 625, 100, 20, "white");
createPlatform(1050, 500, 100, 20, "white");
createPlatform(1050, 375, 100, 20, "white");
createPlatform(737.5, 300, 25, 20, "white");
    // TODO 3 - Create Collectables
createCollectable("aqua", 390, 587.5, 0, 0, 350, 425);
createCollectable("blue", 390, 460, 0, 0, 350, 425, 2);
createCollectable("green", 390, 335, 0, 0, 350, 425, 3);
createCollectable("orange", 1087.5, 587, 0, 0, 1050, 1125);
createCollectable("purple", 1087.5, 461, 0, 0, 1050, 1125, 2);
createCollectable("yellow", 1087.5, 335, 0, 0, 1050, 1125, 3);
createCollectable("red", 739, 240, 1, 1);
    // TODO 4 - Create Cannons
createCannon("left", 540, 2000,);
createCannon("left", 290, 2000);
createCannon("right", 530, 2000);
createCannon("top", 810, 2000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
