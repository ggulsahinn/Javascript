// const object = new Object() //Object Literal
// object.name = "Gülşah"
// console.log(object)

function Employee(name,age){
    this.name=name
    this.age=age
    // this.showInfos=function(){
    //     console.log("İsim: "+this.name + "Yaş: "+this.age)
    // }
}
//Bellekte daha az yer kaplamak için fonksiyonu bu şekilde yazacağız
//Her bilgi için çalışmak yerine bir kere çalışıp prototype dan erişecek bilgiler
Employee.prototype.showInfos = function(){
    console.log("İsim: "+this.name + " Yaş: "+this.age)
}

const emp1=new Employee("Gülşah",24)
const emp2=new Employee("Mustafa",25)

emp1.showInfos()
emp2.showInfos()

console.log(emp1)
console.log(emp2)