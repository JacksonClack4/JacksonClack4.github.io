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
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(250, 650, 100, 20, "white");
    createPlatform(450, 550, 100, 20, "white");
    createPlatform(650, 450, 100, 20, "white");
    createPlatform(450, 350, 100, 20, "white");
    createPlatform(175, 250, 100, 20, "white");
    createPlatform(850, 350, 100, 20, "white");
    createPlatform(1050, 350, 100, 20, "white");
    createPlatform(850, 550, 100, 20, "white");
    createPlatform(1100, 550, 100, 20, "white");
    createPlatform(985, 250, 20, 140, "white");
    createPlatform(1200, 450, 100, 20, "white");



    // TODO 3 - Create Collectables
    createCollectable("diamond", 200, 175);
    createCollectable("diamond", 880, 275);
    createCollectable("diamond", 680, 375);


    
    // TODO 4 - Create Cannons
    createCannon("bottom", 640, 2000);
    createCannon("left", 250, 2000);
    createCannon("right", 600, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
