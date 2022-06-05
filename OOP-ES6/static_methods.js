//Statik metodlar

class Matematik{
    sqrt(x){
        console.log((x*x)**0.5)
    }
    static cube(x){
        console.log(x*x*x)
    }
}
//Static ile bunlara gerek kalmaz
const math = new Matematik()
// math.cube(3)
// console.log(math)

//Obje oluşturmaya gerek kalmadı
Matematik.cube(3)

console.log(math)
math.sqrt(4)
//Static olmadığı için sınıf üzerinden kullanamayız, hata verir
Matematik.sqrt(5)