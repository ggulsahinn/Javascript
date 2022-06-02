//Set - Küme
//Array lere benzere fakat aynı değerden birden fazla bulunmaz sadece bir tane bulunur.

const myset = new Set()
myset.add(100)
myset.add(100)
myset.add(3.14)
myset.add("Gülşah")
myset.add(true)
myset.add({a:1,b:2})

const myset2 = new Set([100,3.14,"Gülşah"])

console.log(myset)
console.log(myset2)

//Size
console.log(myset.size)

//Delete Metodu
//Verilen değer varsa siler yoksa işlem yapmaz, hata vermez.
myset.delete(3.14)

//Has Metodu
//Verilen değer kümede var mı sorgular
console.log(myset.has("Gülşah"))

//For Each
myset.forEach(function(value){
    console.log(value)
})

//For Of
for(let value of myset){
    console.log(value)
}

//Set lerden Array Oluşturma
const array = Array.from(myset)
console.log(array)