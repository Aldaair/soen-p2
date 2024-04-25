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

items.map((item) => {
    const newItem = document.createElement("li");
    //const newItem = document.createElement("input", {type : "checkbox"});
    newItem.innerHTML = item.name;
    container.appendChild(newItem);
})

