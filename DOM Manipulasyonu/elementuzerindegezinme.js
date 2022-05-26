let value;

const todoList = document.querySelector(".list-group")
const todo = document.querySelector(".list-group-item:nth-child(2)") //ikinci çocuğu seçer
const cardrow = document.querySelector(".card.row")

value=todoList
value=todo
value=cardrow

//Child Nodes - Text Dahil

value=todoList.childNodes //child sayısında boşluk, satır atlamaları da sayar
value=todoList.childNodes[0]

//Children - Sadece Element

value=todoList.children; //boşlukları almaz
value=todoList.children[2].textContent = "Değişti"

value=cardrow
value=cardrow.children
value=cardrow.children[2].children[1].textContent = "Burası da değişti"

value=todoList
value=todoList.firstElementChild //ilk çocuk
value=todoList.lastElementChild //son çocuk
value=todoList.children.length
value=todoList.childElementCount //çocuk sayısı kısa yol

value=cardrow
value=cardrow.parentElement //ebeveyn
value=cardrow.parentElement.parentElement

//Element Kardeşleri

value=todo
value=todo.previousElementSibling //önceki kardeşe gider
value=todo.nextElementSibling //sonraki kardeşe gider
value=todo.nextElementSibling.nextElementSibling


console.log(value);