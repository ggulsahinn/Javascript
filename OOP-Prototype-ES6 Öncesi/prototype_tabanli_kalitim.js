//Kalıtım - Interitance

function Person(name,age){
    this.name=name
    this.age=age
}

Person.prototype.showInfos = function(){
    console.log("İsim: "+this.name + " Yaş: "+this.age)
}
// const person = new Person("Gülşah",24)
// console.log(person)

function Employee(name,age,salary){
    // this.name=name
    // this.age=age
    //Call Kullanımı örnek
    Person.call(this,name,age)
    this.salary=salary
}

Employee.prototype = Object.create(Person.prototype)
Employee.prototype.toString = function(){
    console.log("Deneme Employee")
}
//Overriding
Employee.prototype.showInfos = function(){
    console.log("İsim: "+this.name + " Yaş: "+this.age + " Maaş:" + this.salary)
}
const emp = new Employee("Gülşah",24,4000)

// console.log(emp)
// emp.showInfos()
// emp.toString()

console.log(emp)