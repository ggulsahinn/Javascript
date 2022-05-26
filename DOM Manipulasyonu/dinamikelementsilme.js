//Dinamik Element Silme

const todoList = document.querySelector("ul.list-group")
const todos = document.querySelectorAll("li.list-group-item")

//Remove Metodu
// todos[0].remove()

//Remove Child Metodu
// todoList.removeChild()

// todoList.removeChild(todoList.lastElementChild) //son çocuğu siler
// todoList.removeChild(todoList.firstElementChild) //ilk çocuğu siler
todoList.removeChild(todos[3])


console.log(todoList)