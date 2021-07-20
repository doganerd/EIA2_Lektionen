"use strict";
var Haushaltshilfe;
(function (Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        var _a;
        Haushaltshilfe.generateContent(Haushaltshilfe.data);
        var form = document.querySelector("#form");
        form.addEventListener("change", handleChange);
        (_a = document.querySelector("#button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", handleClick);
    }
    function handleClick() {
        alert("Vielen Dank für ihre Bestellung! Sie wird sofort bearbeitet :)");
    }
    function handleChange(_event) {
        //console.log(_event);
        var order = document.querySelector("#order");
        order.innerHTML = "";
        var data = new FormData(document.forms[0]);
        var total = 0;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var entry = data_1[_i];
            if (entry[0] == "Checkbox") {
                var item = document.querySelector("[value='" + entry[1] + "']");
                var price = Number(item.getAttribute("price"));
                var amount = Number(data.get(entry[1] + "Menge"));
                var einheit = (item.getAttribute("einheit"));
                total += price * amount;
                order.innerHTML += item.value + " | " + amount + " " + einheit + ": " + price * amount + " €" + "<br> <br>";
            }
            if (entry[0] == "Money") {
                var item = document.querySelector("[value='" + entry[1] + "']");
                var betrag = Number(data.get("Betrag"));
                order.innerHTML += item.value + ": " + betrag + " €" + " <br>" + " Fee: 5€ <br> <br>";
                total += 5;
            }
            if (entry[0] == "chores") {
                var item = document.querySelector("[value='" + entry[1] + "']");
                var price = Number(item.getAttribute("price"));
                total += price;
                order.innerHTML += item.value + ": " + price + " €" + "<br> <br>";
            }
            if (entry[0] == "Payment") {
                var item = document.querySelector("[value='" + entry[1] + "']");
                order.innerHTML += "--------------------------------- <br> Payment Method: " + item.value + "<br> <br>";
            }
        }
        var supermarkt = data.get("Supermarkt");
        order.innerHTML += "Store: " + supermarkt + "<br>" + "______________________ <br>" + "Total: " + total + "€";
    }
})(Haushaltshilfe || (Haushaltshilfe = {}));
//# sourceMappingURL=datastructure.js.map