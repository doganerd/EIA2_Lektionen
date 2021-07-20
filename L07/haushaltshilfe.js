"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Haushaltshilfe;
(function (Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    var form;
    //let url: string = "server.html"
    var url = "https://https://dilarax.herokuapp.com/";
    function handleLoad(_event) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var response, offer, data, form, submit;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, fetch("data6.json")];
                    case 1:
                        response = _b.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        offer = _b.sent();
                        data = JSON.parse(offer);
                        form = document.querySelector("#form");
                        submit = document.querySelector("#button");
                        form.addEventListener("change", handleChange);
                        submit.addEventListener("click", sendOrder);
                        (_a = document.querySelector("#buttonreset")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", clickDelete);
                        Haushaltshilfe.generateContent(data);
                        return [2 /*return*/];
                }
            });
        });
    }
    function clickDelete() {
        var order = document.querySelector("#order");
        order.innerHTML = "";
    }
    function sendOrder(_event) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, query, response, responseText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Send Order");
                        formData = new FormData(document.forms[0]);
                        query = new URLSearchParams(formData);
                        return [4 /*yield*/, fetch(url + "?" + query.toString())];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        responseText = _a.sent();
                        alert(responseText);
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleChange(_event) {
        //console.log(_event);
        var order = document.querySelector("#order");
        order.innerHTML = "";
        var data = new FormData(form);
        var total = 0;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var entry = data_1[_i];
            if (entry[0] == "field1") {
                var item = document.querySelector("[value='" + entry[1] + "']");
                var price = Number(item.getAttribute("price"));
                var amount = Number(data.get(entry[1] + "menge"));
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
//# sourceMappingURL=haushaltshilfe.js.map