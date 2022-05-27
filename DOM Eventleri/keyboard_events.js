//Klavye Eventleri

//keypress - sadece harfler ve sayılar
// document.addEventListener("keypress",run)
// function run(e){
//     // console.log(e.which) //bastığımız değerinn ASCII karşılığı
//     console.log(e.key) //bastığımız harf-sayı
//     console.log("Naber") //bastıktan sonra consola yazar
// }

// //keydown - klavyedeki tüm tuşları algılar
// document.addEventListener("keydown",run)
// function run(e){
//     // console.log(e.which)
//     console.log(e.key) 
// }

// //keyup
// document.addEventListener("keyup",run)
// function run(e){
//     // console.log(e.which)
//     console.log(e.key) 
// }


const header = document.querySelector(".card-header")
const todoInput = document.querySelector("#todo")

todoInput.addEventListener("keyup",changeText)
function changeText(e){
    header.textContent = e.target.value //inputtaki değeri header a yazar
    console.log(e.target.value) //input alanındaki değeri alır
}