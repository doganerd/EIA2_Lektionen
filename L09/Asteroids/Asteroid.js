var Asteroids;
(function (Asteroids) {
    var Asteroid = /** @class */ (function () {
        function Asteroid(_size) {
            console.log("Asteroid constructor");
            this.position = new Asteroids.Vector(0, 0);
            this.velocity = new Asteroids.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        Asteroid.prototype.move = function (_timeslice) {
            console.log("Asteroid move");
            var offset = new Asteroids.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Asteroids.crc2.canvas.height;
            if (this.position.x > Asteroids.crc2.canvas.width)
                this.position.x -= Asteroids.crc2.canvas.width;
            if (this.position.y > Asteroids.crc2.canvas.height)
                this.position.y -= Asteroids.crc2.canvas.height;
        };
        Asteroid.prototype.draw = function () {
            console.log("Asteroid draw");
            Asteroids.crc2.save();
            Asteroids.crc2.translate(this.position.x, this.position.y);
            Asteroids.crc2.scale(this.size, this.size);
            Asteroids.crc2.translate(-50, -50);
            Asteroids.crc2.stroke(Asteroids.asteroidPaths[this.type]);
            Asteroids.crc2.restore();
        };
        return Asteroid;
    }());
    Asteroids.Asteroid = Asteroid;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map