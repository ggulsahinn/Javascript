const filterInput = document.getElementById("filter")

//Eski yöntem
// filterInput.onfocus = function(){
//     console.log("Naber")
// }

// filterInput.addEventListener("focus",function(e){
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.target.placeholder)
//     console.log(e.target.className)
//     console.log("Naber")
// })

const todoForm = document.getElementById("todo-form")
todoForm.addEventListener("submit",submitForm)
function submitForm(e){
    console.log("Submit Eventi")

    e.preventDefault() //submit event in default özelliklerini yok sayar, sayfanın yenilenmesini önler
}