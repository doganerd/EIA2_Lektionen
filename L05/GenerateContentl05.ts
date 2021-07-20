namespace Haushaltshilfe {

    export interface Item {
        name: string;
        price: number;
    }

     export interface Data {
        [category: string]: Item[];
    }

    export function generateContent(_data: Data): void {

        for (let category in _data) {
            //console.log(category);
            let items: Item[] = _data[category];

            let group: HTMLElement | null = null;

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

            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }

function createSelect(_items: Item[]): HTMLElement | null{ 
    let group: HTMLDivElement = document.createElement("div");
    for (let item of _items) {
        let select: HTMLInputElement = document.createElement("input");
        select.type ="select";
        select.setAttribute("price", item.price.toFixed(2));
        select.value = item.name;
        select.id = item.name;

        let label: HTMLLabelElement = document.createElement("label");
        label.textContent = item.name;
        label.htmlFor = item.name;

        group.appendChild(select);
        group.appendChild(label);
    }
    return group;
}

function createSingle(_items: Item[], _category: string): HTMLElement | null{
    let group: HTMLDivElement = document.createElement("div");
    for (let item of _items) {
        let radio: HTMLInputElement = document.createElement("input");
        radio.type ="radio";
        radio.setAttribute("price", item.price.toFixed(2));
        radio.value = item.name;
        radio.name = _category;
        radio.id = item.name;

        let label: HTMLLabelElement = document.createElement("label");
        label.textContent = item.name;
        label.htmlFor = item.name;

        group.appendChild(radio);
        group.appendChild(label);
    }
    return group;
}

function createMultiple(_items: Item[], _category: string): HTMLElement | null{
    let group: HTMLDivElement = document.createElement("div");
    for (let item of _items) {
        let checkbox: HTMLInputElement = document.createElement("input");
        checkbox.type ="checkbox";
        checkbox.setAttribute("price", item.price.toFixed(2));
        checkbox.value = item.name;
        checkbox.name = _category;
        checkbox.id = item.name;

        let label: HTMLLabelElement = document.createElement("label");
        label.textContent = item.name;
        label.htmlFor = item.name;

        group.appendChild(checkbox);
        group.appendChild(label);
    }
    return group;
}


}
