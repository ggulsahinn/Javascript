// //Mapler - Key(Anahtar) - Value(Değer)

// let myMap = new Map() //map oluşturma

// const key1 = "Gülşah" //string
// const key2 = {a:10, b:20} //obje
// const key3 = () => 2 //fonksiyon

// //Set
// myMap.set(key1,"String değer")
// myMap.set(key2,"Object Literal değer")
// myMap.set(key3,"Function değer")

// //Get
// console.log(myMap.get(key1))
// console.log(myMap.get(key2))
// console.log(myMap.get(key3))

// console.log(myMap)

// //Map Boyutu
// console.log(myMap.size)


const cities = new Map()

cities.set("Ankara",5)
cities.set("İstanbul",15)
cities.set("İzmir",4)

//ForEach
cities.forEach(function(value,key){
    console.log(key,value)
})

//For Of
for(let [key,value] of cities){ //Destructing
    console.log(key,value)
}

//Map Keys
for(let key of cities.keys()){
    console.log(key)
}

//Map Values
for(let value of cities.values()){
    console.log(value)
}

//Array dan Map Oluşturma
const array = [["key1", "value1"], ["key2", "value2"]]
const lastMap = new Map(array)
console.log(lastMap)

//Map ten Array Oluşturma
const array2 = Array.from(cities)
// [["Ankara",5],["İstanbul",15],["İzmir",4]]
console.log(array2)

