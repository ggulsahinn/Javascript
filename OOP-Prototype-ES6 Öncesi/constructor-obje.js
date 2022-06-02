// console.log(this) //Global Scope

//Constructor (Yapıcı fonksiyon)

function Employee(name,age,salary){ //fonksiyon adının baş harfi büyük olmalı
    this.name = name
    this.age = age
    this.salary = salary

    this.showInfos = function(){
        console.log(this.name,this.age,this.salary)
    }

    console.log(this)
}
const emp1 = new Employee("Gülşah",24,5000)
const emp2 = new Employee("Ahmet",25,4000)

emp1.showInfos()

