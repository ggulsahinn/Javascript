// Call() fonksiyonu, verilen this anahtar değeriyle(obje) ve bağımsız olarak sağlanan bağımsız argümanlarla bir fonksiyonu çağırır.
// Argümanlar fonksiyona tek tek gönderilir. (Örnek: test(obj, arg1, arg2, arg3))

// Apply() fonksiyonu, verilen this anahtar değeriyle(obje) ve bağımsız olarak sağlanan değişkenlerle bir fonksiyonu çağırır. 
// Argümanlar fonksiyona argüman listesi şeklinde gönderilir. (Örnek: test(obj,[arg1,arg2,arg3]))

const obj1 = {
    number1:10,
    number2:20
}
const obj2 = {
    number1:30,
    number2:40
}

function addNumbers(number3,number4){
    console.log(this.number1 + this.number2 + number3 + number4)
}
// addNumbers(100,200)

//this.number verileri gelmesi için
//CALL ile
// addNumbers.call(obj1,100,200) 
// addNumbers.call(obj2,100,200)

//APPLY ile
// addNumbers.apply(obj1,[100,200])

//BIND
// Bind() fonksiyonu, içine verilen objeye göre yeni bir fonksiyon kopyası yaratır. 
// Oluşan bu kopya fonksiyonu daha sonradan argüman listesi ile beraber gönderilen objeye kullanabiliriz.

function getNumbersTotal(number3,number4){
    return this.number1+this.number2+number3+number4
}
const copyFunc1 = getNumbersTotal.bind(obj1)
const copyFunc2 = getNumbersTotal.bind(obj2)
 
console.log(copyFunc1)
console.log(copyFunc2)

console.log(copyFunc1(100,200))
console.log(copyFunc2(100,200))