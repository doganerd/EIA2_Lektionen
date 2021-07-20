var chosenSequence = ["EFEU", "KAKTUS", "MIMOSE", "DRACHENBAUM", "BOGENHANF", "LUPINE", "FENSTERBLATT", "BUNTNESSEL", "BAMBUS", "STECKENPALME"];
var word;
var card;
var t = 60;
var memory;
(function (memory) {
    console.log("start");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        var game = document.querySelector("div#game");
        game.addEventListener("click", chooseCards);
        document.addEventListener("mousedown", chooseSequence);
    }
    function chooseCards(_event) {
        //console.log(_event);
        var game = _event.target;
        var cards = document.createElement("span");
    }
    function chooseSequence(_event) {
        //console.log(_event);
        var chosenSequence = _event;
    }
})(memory || (memory = {}));
//creating cards
function sequence() {
    console.log(chosenSequence);
    var x, y;
    for (var i = 0; i < chosenSequence.length; i++) {
        y = Math.floor(Math.random() * chosenSequence.length);
        x = chosenSequence[i];
        chosenSequence[i] = chosenSequence[y];
        chosenSequence[y] = x;
    }
    console.log(chosenSequence);
    word = chosenSequence[1];
    card.innerHTML = "";
}
//shuffle
function mix() {
    var a;
    var b;
    var c = this.length;
    while (--c > 0) {
        a = Math.floor(Math.random() * (c + 1));
        b = this[a];
        this[a] = this[c];
        this[c] = b;
    }
}
;
function shuffle(words) {
    var i = words.length, temp, index;
    while (i > 0) {
        index = Math.floor(Math.random() * i);
        i--;
        temp = words[i];
        words[i] = words[index];
        words[index] = temp;
    }
    return words;
}
var sequenceArray = ["EFEU", "KAKTUS", "MIMOSE", "DRACHENBAUM", "BOGENHANF", "LUPINE", "FENSTERBLATT", "BUNTNESSEL", "BAMBUS", "STECKENPALME"];
console.log(shuffle(sequenceArray));
window.clearInterval();
function countdown() {
    t = t--;
    if (t < 60) {
        document.querySelector("text#id");
        t;
    }
    if (t < 1) {
        window.clearInterval();
    }
}
setInterval("countdown()", 1000);
//# sourceMappingURL=memory.js.map