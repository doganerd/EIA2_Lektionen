var Inheritance;
(function (Inheritance) {
    function createPaths() {
        Inheritance.virusPaths = createVirusPaths();
        Inheritance.cellPath = createCellPath();
    }
    Inheritance.createPaths = createPaths;
    function createVirusPaths(_shapes) {
        var paths = [];
        for (var _i = 0, _shapes_1 = _shapes; _i < _shapes_1.length; _i++) {
            var type = _shapes_1[_i];
            var path = new Path2D();
            var first = true;
            // console.group(type);
            for (var _a = 0, type_1 = type; _a < type_1.length; _a++) {
                var coordinates = type_1[_a];
                // console.log(coordinates);
                if (first)
                    path.moveTo(coordinates[0], coordinates[1]);
                else
                    path.lineTo(coordinates[0], coordinates[1]);
                first = false;
            }
            // console.groupEnd();
            path.closePath();
            paths.push(path);
        }
        return paths;
    }
    function createCellPath() {
        var path = new Path2D();
        path.moveTo(20, 13);
        path.lineTo(27, 3);
        path.lineTo(38, 3);
        path.lineTo(43, 13);
        path.lineTo(59, 25);
        path.lineTo(45, 35);
        path.lineTo(18, 35);
        path.lineTo(4, 25);
        path.lineTo(20, 13);
        path.lineTo(43, 13);
        path.closePath();
        path.moveTo(4, 25);
        path.lineTo(59, 25);
        path.closePath();
        return path;
    }
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=paths.js.map