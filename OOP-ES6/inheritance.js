//Kalıtım

class Person{ //SuperClass, BaseClass
    constructor(name,age){
        this.name=name
        this.age=age
    }
    showInfos(){
        console.log("İsim: "+this.name + " Yaş: "+this.age)
    }
}
class Employee extends Person{ //DerivedClass, SubClass, ChildClass
    constructor(name,age,salary){
        // this.name=name
        // this.age=age
        super(name,age) //üst sınıfın constructor ını kullanır
        this.salary=salary
    }
    //Overriding yapmış olur
    showInfos(){
        console.log("İsim: "+this.name + " Yaş: "+this.age + " Maaş:" + this.salary)
    }
    toString(){ //Overriding
        console.log("Employee")
    }
    raiseSalary(amount){ //Ekstra
        this.salary += amount
    }
}
const emp = new Employee("gülşah",24,6000)
emp.raiseSalary(500)
console.log(emp)

emp.showInfos()