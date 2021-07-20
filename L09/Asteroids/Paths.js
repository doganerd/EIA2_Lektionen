var Asteroids;
(function (Asteroids) {
    Asteroids.shapesAsteroids = [
        [
            [30, 1], [50, 15], [71, 1], [88, 31], [67, 40], [84, 63], [59, 93], [30, 79], [19, 87], [2, 63], [15, 43], [8, 20]
        ],
        [
            [39, 1], [53, 28], [78, 15], [91, 41], [76, 59], [78, 82], [44, 94], [15, 83], [1, 55], [14, 14]
        ],
        [
            [39, 0], [57, 26], [68, 7], [86, 31], [88, 70], [53, 58], [54, 96], [26, 92], [28, 76], [2, 56], [15, 19]
        ],
        [
            [37, 3], [70, 14], [62, 34], [83, 31], [78, 76], [55, 96], [20, 84], [7, 67], [5, 27], [20, 15], [39, 39]
        ]
    ];
    function createPaths() {
        Asteroids.asteroidPaths = createAsteroidPaths(Asteroids.shapesAsteroids);
        Asteroids.ufoPath = createUfoPath();
    }
    Asteroids.createPaths = createPaths;
    function createAsteroidPaths(_shapes) {
        var paths = [];
        for (var _i = 0, _shapes_1 = _shapes; _i < _shapes_1.length; _i++) {
            var type = _shapes_1[_i];
            var path = new Path2D();
            var first = true;
            //console.group(type);
            for (var _a = 0, type_1 = type; _a < type_1.length; _a++) {
                var coordinates = type_1[_a];
                if (first)
                    path.moveTo(coordinates[0], coordinates[1]);
                else
                    path.lineTo(coordinates[0], coordinates[1]);
                first = false;
            }
            path.closePath();
            paths.push(path);
        }
        return paths;
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Paths.js.map