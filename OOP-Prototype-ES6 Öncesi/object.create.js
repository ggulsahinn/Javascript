//Kaltım da kullanılır

// const obj= {
//     test1:function(){
//         console.log("Test 1")
//     },
//     test2:function(){
//         console.log("Test 2")
//     }
// }
// // console.log(obj)

// //Prototype i başka bir objeden oluşturur
// const emp = Object.create(obj)
// emp.name = "Gülşah"
// emp.age = 24
// console.log(emp)

function Person(){

}
Person.prototype.test1 = function(){
    console.log("Test 1")
}
Person.prototype.test2 = function(){
    console.log("Test 2")
}

function Employee(name,age){
    this.name=name
    this.age=age
}
//Employee Person dan miras alır (KALITIM)
Employee.prototype = Object.create(Person.prototype)
Employee.prototype.myTest = function(){
    console.log("MyTest")
}

const emp = new Employee("Gülşah",24)
console.log(emp)