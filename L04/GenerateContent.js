var Haushaltshilfe;
(function (Haushaltshilfe) {
    function generateContent(_data) {
        for (var category in _data) {
            //console.log(category);
            var items = _data[category];
            var group = null;
            switch (category) {
                case "Groceries":
                    group = createMultiple(items, category);
                    break;
                case "Banking":
                    group = createSingle(items, category);
                    break;
                case "Chores":
                    group = createSelect(items);
                    break;
                default:
                    break;
            }
            var fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    Haushaltshilfe.generateContent = generateContent;
    function createSelect(_items) {
        var group = document.createElement("div");
        for (var _i = 0, _items_1 = _items; _i < _items_1.length; _i++) {
            var item = _items_1[_i];
            var select = document.createElement("input");
            select.type = "select";
            select.setAttribute("price", item.price.toFixed(2));
            select.value = item.name;
            select.id = item.name;
            var label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(select);
            group.appendChild(label);
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
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            var label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
})(Haushaltshilfe || (Haushaltshilfe = {}));
//# sourceMappingURL=GenerateContent.js.map