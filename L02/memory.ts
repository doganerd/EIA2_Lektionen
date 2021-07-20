let chosenSequence: string [] = ["EFEU", "KAKTUS", "MIMOSE", "DRACHENBAUM", "BOGENHANF", "LUPINE", "FENSTERBLATT", "BUNTNESSEL", "BAMBUS", "STECKENPALME"]
let word: string;
let card: HTMLElement;
let t = 60;
namespace memory {
    console.log("start");

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let game: HTMLElement = <HTMLElement>document.querySelector("div#game");
        game.addEventListener("click", chooseCards);
        document.addEventListener("mousedown", chooseSequence);
    }

    function chooseCards(_event: MouseEvent): void {
        //console.log(_event);

        let game: HTMLElement = <HTMLElement>_event.target;
        let cards: HTMLSpanElement = document.createElement("span");

    }

    function chooseSequence(_event: MouseEvent): void {
        //console.log(_event);
        let chosenSequence = _event;
    }

}

//creating cards

function sequence(): void {
    console.log(chosenSequence);

    let x, y;
    for (var i: number = 0; i < chosenSequence.length; i++) {
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

function mix (): void {
    var a;
    var b;
    var c = this.length;
    while (--c > 0) {
        a = Math.floor(Math.random() * (c + 1));
        b = this[a];
        this[a] = this[c];
        this[c] = b;
    }
};

function shuffle(words) {
    let i = words.length, temp, index;

    while (i > 0) {
        index = Math.floor(Math.random() * i);
        i--;
        temp = words[i];
        words[i] = words[index];
        words[index] = temp;
    }
    return words;
}
let sequenceArray: string[] = ["EFEU", "KAKTUS", "MIMOSE", "DRACHENBAUM", "BOGENHANF", "LUPINE", "FENSTERBLATT", "BUNTNESSEL", "BAMBUS", "STECKENPALME"];
console.log(shuffle(sequenceArray));

window.clearInterval();
function countdown() {
    t = t --;
    if (t < 60) {
        <HTMLElement>document.querySelector("text#id") ; t;
    }

    if (t < 1) {
        window.clearInterval();
    }
}

setInterval("countdown()", 1000);