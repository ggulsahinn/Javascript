//Callback Fonksiyon
//Bir fonksiyonu bir yerden veri geldiğinde çalıştırmak istediğimizde kullanırız.
//Bu fonkisyonu başka fonksiyona parametre olarak gönderebiliriz.
//Asankron işlemleri de yönetebiliriz.

// const langs = ["Python","Java","C++"]
// langs.forEach(function(lang){
//     console.log(lang)
// })

// document.getElementById("btn").addEventListener("click",function(){
//     console.log("Tıkla")
// })

//Process2 nin 1 den önce çalışması için callback gönderilir.
// function process1(callback){
//     setTimeout(function(){
//         console.log("Process 1")
//         callback()
//     },3000)
// }
// function process2(){
//     setTimeout(function(){
//         console.log("Process 2")
//     },2000)
// }

// process1(process2)

const langs = ["Python","Java","C++"]
function addLang(lang,callback){
    setTimeout(function(){
        langs.push(lang)
        console.log("Eklendi")
        callback()
    },2000)
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang)
        })
    },1000)
}

addLang("Javascript",getAllLangs)
// getAllLangs() //Asenkron Durum