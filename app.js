'use strict'
const GI = {
	createElement (tag, atributes) {
		let element = document
		return document.createElement(tag)
	}
}
let container = document.getElementById("container");
const items = [
    {id: 1, name : 'Alimentar al perro'},
    {id: 2, name : 'Estudiar para prueba escrita'},
    {id: 3, name : 'Pagar taxes'},
    {id: 4, name : 'Pasear a perro'},
    {id: 5, name : 'Comprar entradas para el cine'},
]

items.forEach((item) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = item.id;

    const label = document.createElement("label");
    label.textContent = item.name;

    li.appendChild(checkbox);
    li.appendChild(label);
    container.appendChild(li);

    checkbox.addEventListener("change", function() {
        if (this.checked) {
            label.classList.add("completed");
        } else {
            label.classList.remove("completed");
        }
    });
});

