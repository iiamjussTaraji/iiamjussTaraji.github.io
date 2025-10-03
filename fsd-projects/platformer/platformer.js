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
createPlatform(100, 700, 90 , 200,"lightblue")
createPlatform(300, 600, 90, 60,"lightpink");
createPlatform(500, 500, 90, 60,"lightblue");
createPlatform(700, 400, 90, 60,"lightpink");
createPlatform(900, 300, 90, 60,"lightblue");
createPlatform(1300, 100, 90, 60,"lightblue");
createPlatform(1100, 200, 90, 60,"lightpink");




    // TODO 3 - Create Collectables
createCollectable("steve", 1330, 50);
createCollectable("diamond", 117, 650, 0.19, 0.6);
createCollectable("grace", 315, 500, 0.5, 0.8);
createCollectable("database", 518, 460, 0.5, 0.7);
createCollectable("kennedi", 719, 360, 0.5, 0.7);
createCollectable("max", 920, 260, 0.5, 0.7);
createCollectable("diamond", 1120, 160, 0.5, 0.7);



    // TODO 4 - Create Cannons
createCannon("top", 900, 2000);
createCannon("right", 300, 4000);
createCannon("left", 300, 4000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }
  registerSetup(setup);
});
