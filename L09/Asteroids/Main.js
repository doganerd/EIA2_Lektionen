var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", handleload);
    var asteroids = [];
    function handleload(_event) {
        console.log("Asteroids starting");
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Asteroids.crc2 = canvas.getContext("2d");
        Asteroids.crc2.fillStyle = "black";
        Asteroids.crc2.strokeStyle = "white";
        Asteroids.createPaths();
        console.log("Asteroids paths: ", Asteroids.asteroidPaths);
        createAsteroids(5);
        //createShip();
        //canvas.addEventListener("mousedown", loadLaser);
        //canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        //canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
        var asteroid = new Asteroids.Asteroid(1);
        console.log(asteroid);
        for (var i = 0; i < 100; i++) {
            asteroid.draw();
            asteroid.move(0.1);
        }
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Main.js.map