"use strict";
var HaushaltshilfeA4;
(function (HaushaltshilfeA4) {
    function generateContent(_data) {
        for (var category in _data) {
            var items = _data[category];
            var group = null;
            switch (category) {
                case "Artikel":
                    group = createMultiple(items, category);
                    break;
                case "Supermarkt":
                    group = createSelect(items, category);
                    break;
                case "Hausarbeiten":
                    group = createSelect(items, category);
                    break;
                case "Zahlung":
                    group = createSingle(items, category);
                    break;
                default:
                    break;
            }
            var fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
        function createSelect(_items, _category) {
            var group = document.createElement("div");
            var select = document.createElement("select");
            select.name = _category;
            for (var _i = 0, _items_1 = _items; _i < _items_1.length; _i++) {
                var item = _items_1[_i];
                var newoption = document.createElement("option");
                newoption.text = item.name;
                select.add(newoption);
                newoption.setAttribute("price", item.price.toFixed(2));
                newoption.value = item.name;
                group.appendChild(select);
            }
            return group;
        }
        function createSingle(_items, _category) {
            var group = document.createElement("div");
            for (var _i = 0, _items_2 = _items; _i < _items_2.length; _i++) {
                var item = _items_2[_i];
                var radio = document.createElement("input");
                radio.type = "radio";
                radio.setAttribute("price", item.price.toFixed(2));
                radio.setAttribute("einheit", item.einheit);
                radio.value = item.name;
                radio.name = _category;
                radio.id = item.name;
                var label = document.createElement("label");
                label.textContent = item.name;
                label.htmlFor = item.name;
                group.appendChild(radio);
                group.appendChild(label);
            }
            return group;
        }
        function createMultiple(_items, _category) {
            var group = document.createElement("div");
            for (var _i = 0, _items_3 = _items; _i < _items_3.length; _i++) {
                var item = _items_3[_i];
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.setAttribute("price", item.price.toFixed(2));
                checkbox.setAttribute("einheit", item.einheit);
                checkbox.value = item.name;
                checkbox.name = _category;
                checkbox.id = item.name;
                var label = document.createElement("label");
                label.textContent = item.name;
                label.htmlFor = item.name;
                group.appendChild(checkbox);
                group.appendChild(label);
                var menge = document.createElement("input");
                menge.type = "number";
                menge.name = item.name + "Menge";
                menge.max = "1000";
                menge.min = "0";
                menge.step = "1";
                menge.value = "0";
                group.appendChild(menge);
            }
            return group;
        }
    }
    HaushaltshilfeA4.generateContent = generateContent;
})(HaushaltshilfeA4 || (HaushaltshilfeA4 = {}));
//# sourceMappingURL=GenerateContent.js.map