const cardBody = document.querySelectorAll(".card-body")[1]
const title = document.querySelector("#tasks-title")

//Click Event
// title.addEventListener("click",run)

//Double Click
// title.addEventListener("dblclick",run)

//Mouse Down
// title.addEventListener("mousedown",run)

//Mouse Up
// title.addEventListener("mouseup",run)

//Mouse Over
// title.addEventListener("mouseover",run)

//Mouse Out
// title.addEventListener("mouseout",run)

//Mouse Enter ve Mouse Leave
cardBody.addEventListener("mouseenter",run) //over dan farkı kart içindeki her alana girişte değil bir kez çalışır
cardBody.addEventListener("mouseleave",run) //out dan farkı kart içindeki her alana çıkışta değil bir kez çalışır

function run(e){
    console.log(e.type)
}
