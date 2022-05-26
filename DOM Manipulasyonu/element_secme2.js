
const element =document.querySelector("#clear-todos");

//Element Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.textContent); //html etiketleri olmadan sadece yazıları alır
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

//Element Seçme ve Style Özelliklerini Değiştirme

element.className = "btn btn-danger";
element.style.color = "black"
element.style.marginTop = "10px"
element.href = "https://www.google.com.tr"
element.target = "_blank" //linki yeni sekmede açmak için
// element.textContent = "değişti" //butondaki text değişir
element.innerHTML = "<span style = 'color:green'>HTML ile değişti</span>"

console.log(element);



const elements = document.querySelectorAll(".app-header");
elements.forEach(function(el){
    el.style.color = "red"
})


console.log(elements);
