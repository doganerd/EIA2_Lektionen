"use strict";
namespace Haushaltshilfe {
    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement; 
    //let url: string = "server.html"
    let url: string = "https://https://dilarax.herokuapp.com/";

   async function handleLoad(_event: Event): Promise<void> {

        let response: Response = await fetch("data6.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);
        let form: HTMLDivElement = <HTMLDivElement> document.querySelector("#form");
        let submit : HTMLButtonElement = <HTMLButtonElement> document.querySelector("#button");
        form.addEventListener("change", handleChange);
        submit.addEventListener("click", sendOrder);
        document.querySelector("#buttonreset")?.addEventListener("click", clickDelete);
    


        generateContent(data);

   }
function clickDelete(): void {
    let order: HTMLDivElement = <HTMLDivElement>document.querySelector("#order");
    order.innerHTML ="";
}



    async function sendOrder(_event: Event): Promise<void> {
        console.log("Send Order");
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        alert(responseText);
    }


    function handleChange(_event: Event): void {
        //console.log(_event);
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("#order");
        order.innerHTML="";

        let data: FormData = new FormData(form);
        let total: number = 0;

        for (let entry of data) {
            if (entry[0] == "field1") {
                let item: HTMLInputElement = <HTMLInputElement> document.querySelector("[value='" + entry[1] + "']");
                let price: number = Number(item.getAttribute("price"));
                let amount: number = Number (data.get(entry[1] + "menge"));
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
