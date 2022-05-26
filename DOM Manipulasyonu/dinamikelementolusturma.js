//Yeni Element Oluşturma

//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>               

const newLink = document.createElement("a")
const cardbody = document.getElementsByClassName("card-body")[1]

newLink.id = "clear-todos"
newLink.className = "btn btn-danger"
newLink.href = "https://www.google.com.tr"
newLink.target = "_blank"

newLink.appendChild(document.createTextNode("Farklı sayfaya git"))

cardbody.appendChild(newLink)

// Text Content
// newLink.textContent = "Farklı sayfaya git" // güvenli bir yöntem değil

//Text  Node
// const text = document.createTextNode("Naber")
// cardbody.appendChild(text)



console.log(newLink)