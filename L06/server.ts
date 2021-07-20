"use strict";
namespace Haushaltshilfe {
    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement; 
    //let url: string = "server.html"
    let url: string = "https://https://dilarax.herokuapp.com/";

   async function handleLoad(_event: Event): Promise<void> {

        let response: Response = await fetch("datal05.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);


        generateContent(data);

        form = <HTMLFormElement> document.querySelector("#form");
        let button: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#button");
        let submit: HTMLButtonElement = <HTMLButtonElement> document.querySelector("button[type=button        s]");
        console.log(submit)
        form.addEventListener("change", handleChange);
        button.addEventListener("button", handleChange);
        document.querySelector("#button")?.addEventListener("click", handleClick);
        submit.addEventListener("click", sendOrder);

        displayOrder();

    }


    async function sendOrder(_event: Event): Promise<void> {
        console.log("Send Order");
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        await fetch(url, "?", + query.toString());
        alert("Order sent!");
    }


    function handleClick(): void {
        alert("Vielen Dank für ihre Bestellung!");
    }

    function handleChange(_event: Event): void {
        //console.log(_event);

        displayOrder();

    }

    function displayOrder(): void {

        let order: HTMLDivElement = <HTMLDivElement> document.querySelector("#order");
        order.innerHTML = "";

        let data: FormData = new FormData(form);
        let total: number = 0;

        for (let entry of data) {
            if (entry[0] == "Checkbox") {
                let item: HTMLInputElement = <HTMLInputElement> document.querySelector("[value='" + entry[1] + "']");
                let price: number = Number(item.getAttribute("price"));
                let amount: number = Number (data.get(entry[1] + "Menge"));
                let einheit: string = <string> (item.getAttribute("einheit"));
                
                total += price * amount;
                order.innerHTML += item.value + " | " + amount + " " + einheit + ": " + price * amount + " €" + "<br> <br>";
            }

            if (entry[0] == "Money") {
                let item: HTMLInputElement = <HTMLInputElement> document.querySelector("[value='" + entry[1] + "']");
                let betrag: number = Number(data.get("Betrag"));
                order.innerHTML += item.value + ": " +  betrag + " €" + " <br>" + " Fee: 5€ <br> <br>";
                total += 5;
            }

            if (entry[0] == "chores") {
                let item: HTMLInputElement = <HTMLInputElement> document.querySelector("[value='" + entry[1] + "']");
                let price: number = Number(item.getAttribute("price")); 
                total += price;
                order.innerHTML += item.value + ": " + price + " €" + "<br> <br>";
            }

            if (entry[0] == "Payment") {
                let item: HTMLInputElement = <HTMLInputElement> document.querySelector("[value='" + entry[1] + "']");
                order.innerHTML += "--------------------------------- <br> Payment Method: " + item.value + "<br> <br>";
            }

        }
        let supermarkt = data.get("Supermarkt");
        order.innerHTML += "Store: " + supermarkt + "<br>" + "______________________ <br>" + "Total: " + total + "€";
    }

}
