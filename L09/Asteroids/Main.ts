namespace Asteroids {
    window.addEventListener("load", handleload);

    export let crc2: CanvasRenderingContext2D;

    let asteroids: Asteroid[] = [];

    function handleload(_event: Event): void {
        console.log("Asteroids starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";

        createPaths();
        console.log("Asteroids paths: ", asteroidPaths);

        createAsteroids(5);
        //createShip();

        //canvas.addEventListener("mousedown", loadLaser);
        //canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        //canvas.addEventListener("mousemove", setHeading);

        window.setInterval(update, 20);

        let asteroid: Asteroid = new Asteroid(1);
        console.log(asteroid);
        for (let i: number = 0; i < 100; i++) {
            asteroid.draw();
            asteroid.move(0.1);
        }

    }
}