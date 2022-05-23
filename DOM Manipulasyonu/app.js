// Window Object
//console.log(this);

// HTML sayfasının tümünün gelmesini sağlar
//console.log(this.document);

let value;
value=document;

value=document.all; //tüm elementleri gösterir
value=document.all.length; //kaç element olduğunu gösterir
value=document.all[0]; //ilk elementi verir
value=document.all[document.all.length-1]; //son elementi verir

// const elements = document.all; //HTML Collection
// for (let i=0; i<=elements.length; i++){
//     console.log(elements[i]);
// }

//Document foreach ile yazdırılamaz, array e çevirmek gerek
// elements.forEach(function(element){
//     console.log(element);
// });

// const collection = Array.from(document.all);
// collection.forEach(function(collection){
//     console.log(collection);
// });

value=document.body;
value=document.head;
value=document.location;
value=document.location.hostname;

value=document.URL;

value=document.characterSet;


//Scriptler

value=document.scripts;
value=document.scripts.length;

//Linkler
value=document.links;
value.document.links.length;
value=document.links[0];
value=document.links[document.links.length-1].getAttribute("class"); //son linkin class özelliğini yazdırır
value=document.links[document.links.length-1].className; //son linkin class özelliğini yazdırır

//Formlar
value=document.forms;
value=document.forms.length;
value=document.forms[0];
value=document.forms["form"]; //form a verilen name girilerek de erişilebilir
value=document.forms[0].id;
value=document.forms[0].getAttribute("id");
value=document.forms[0].method;


console.log(value);