//Element Id'ye göre seçme

let element;

element= document.getElementById("taskList");

//Element Class'a göre seçme
element=document.getElementsByClassName("task-list-item");

//Element Tag'a göre seçme
element=document.getElementsByTagName("div");

//Query Selector - Css Selektor - Tek (ilk bulduğu) Element
element=document.querySelector("#taskList");
element=document.querySelector(".task-list-item");
element=document.querySelector("div");

//Query SelectorAll - Tüm Elemetleri Seç
element=document.querySelectorAll(".task-list-item");
element=document.querySelectorAll("div");
element.forEach(function(el){
    console.log(el);
})


console.log(element);
