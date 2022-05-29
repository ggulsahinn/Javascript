//Tüm elementleri seçme
const form = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo")
const todoList = document.querySelector(".list-group")
const firstCardBody = document.querySelectorAll(".card-body")[0]
const secondCardBody = document.querySelectorAll(".card-body")[1]
const filter = document.querySelector("#filter")
const clearButton = document.querySelector("#clear-todos")

eventListener();

function eventListener(){ //Tüm event listenerlar
    form.addEventListener("submit",addTodo)
}
function addTodo(e){
    const newTodo = todoInput.value.trim() //trim, baştaki ve sondaki boşlukları siler
    addTodoUI(newTodo)

    e.preventDefault() //form sayfaya yönlenmemesi için default özellikler iptal edilir, en altta olması gerek
}
function addTodoUI(newTodo){ //inputtaki değeri list item olarak UI a ekleyecek
    //List Item oluşturma
    const listItem = document.createElement("li")
    listItem.className = "list-group-item d-flex justify-content-between"

    //Link oluşturma
    const link = document.createElement("a")
    link.href = "#"
    link.className = "delete-item"
    link.innerHTML = '<i class = "fa fa-remove"></i>'

    //Text Node Ekleme
    listItem.appendChild(document.createTextNode(newTodo))
    listItem.appendChild(link)
    
    //Todo List'e List Item'ı ekleme
    todoList.appendChild(listItem)
    
    console.log(listItem)
} 
