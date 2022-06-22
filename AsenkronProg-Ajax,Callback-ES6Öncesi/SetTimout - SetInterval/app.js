//Set Timeout 
//2 saniye sonra ifonskiyon çalışır, işlem uzunsa belirtilen süre artabilir.

setTimeout(function(){
    console.log("Naber?")
},2000)

//Set Interval
//1 saniye aralıklarla fonksiyonun tekrar çalışmasını sağlar.

let i = 0
let value = setInterval(function(){
    i++
    console.log("Sayı: ",i)
},1000)
document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value)
})

//Clear Interval
