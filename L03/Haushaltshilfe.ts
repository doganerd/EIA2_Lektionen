namespace Haushaltshilfe {
    window.addEventListener("load", section);

    function section(): void {
        console.log("Section");
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.querySelectorAll("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("input", handleChange);
        }
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log();
        if (_event.type == "change")
            console.warn("Change: " + target.name + " = " + target.value, _event);
        else
            console.log("Input: " + target.name + " = " + target.value, _event);

        if (target.type == "checkbox")
            console.log("Checked: " + target.name + " = " + target.checked);

        if (target.name == "Slider") {
            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }


    }

    var myNodelist: string = document.getElementsByTagName("LI");
    var x: number;
    for (x = 0; x < myNodelist.length; x++) {
        var span: string = document.createElement("SPAN");
        var txt: string = document.createTextNode("\u00D7");
        span.className = "closing";
        span.appendChild(txt);
        myNodelist[x].appendChild(span);
    }


    var closing: string = document.getElementsByClassName("closing");
    for (x = 0; x < closing.length; x++) {
        closing[x].onclick = function (): void {
            var div: string = this.parentElement;
            div.style.display = "none";
        };
    }


    function newElement(): void {
        var li: string = document.createElement("li");
        var inputValue: string = document.getElementById("newtask").value;
        var t: string = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === "") {
            alert("please enter your task first!");
        } else {
            document.getElementById("tasks").appendChild(li);
        }
        document.getElementById("newtask").value = "";

        var span: string = document.createElement("SPAN");
        var txt: string = document.createTextNode("\u00D7");
        span.className = "closing";
        span.appendChild(txt);
        li.appendChild(span);

        for (x = 0; x < closing.length; x++) {
            closing[x].onclick = function (): void {
                var div: string = this.parentElement;
                div.style.display = "none";
            };
        }
    }

}