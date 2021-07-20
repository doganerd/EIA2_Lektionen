var Virus;
(function (Virus) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.set(_x, _y);
        }
        Vector.getDifference = function (_v0, _v1) {
            return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
        };
        Vector.getRandom = function (_minLength, _maxLength) {
            var vector = new Vector(0, 0);
            var length = _minLength + Math.random() * (_maxLength - _minLength);
            var direction = Math.random() * 2 * Math.PI;
            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
        };
        Object.defineProperty(Vector.prototype, "length", {
            get: function () {
                return Math.hypot(this.x, this.y);
            },
            enumerable: true,
            configurable: true
        });
        Vector.prototype.set = function (_x, _y) {
            this.x = _x;
            this.y = _y;
        };
        Vector.prototype.scale = function (_factor) {
            this.x *= _factor;
            this.y *= _factor;
        };
        Vector.prototype.add = function (_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        };
        Vector.prototype.copy = function () {
            return new Vector(this.x, this.y);
        };
        return Vector;
    }());
    Virus.Vector = Vector;
})(Virus || (Virus = {}));
//# sourceMappingURL=vector.js.map