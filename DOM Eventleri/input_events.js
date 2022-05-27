const filter = document.getElementById("filter")

// document.addEventListener("DOMContentLoaded",load) //Sayfa yüklemesi bittikten sonra gösterilir
// function load(e){
//     console.log("Sayfa yüklendi")
// }

//Focus
// filter.addEventListener("focus",run)

//Blur
// filter.addEventListener("blur",run) //odaktan çıkınca kullanılır

//Paste
// filter.addEventListener("paste",run)

//Copy
// filter.addEventListener("copy",run)

//Cut
// filter.addEventListener("cut",run)

//Select
filter.addEventListener("select",run)

function run(e){
    console.log(e.type)
}