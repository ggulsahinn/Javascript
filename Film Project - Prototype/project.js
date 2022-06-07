const form = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const cardBody = document.querySelectorAll(".card-body")[1]
const clear = document.getElementById("clear-films")

//UI Objesini Başlatma
const ui = new UI()

//Storage Objesi Üret
const storage = new Storage()

//Tüm Eventleri Yükleme
eventListeners()

function eventListeners(){
    form.addEventListener("submit",addFilm)
    document.addEventListener("DOMContentLoaded",function(){ //Sayfa yüklendiğinde event i
        let films = storage.getFilmsFromStorage()
        ui.loadAllFilms(films)
    })
    cardBody.addEventListener("click",deleteFilm)
    clear.addEventListener("click",clearAllFilms)
}

function addFilm(e){
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if(title==="" || director==="" || url===""){
        //Hata
        ui.displayMessages("Tüm alanları doldurun.","danger")
    }
    else{
        //Yeni Film
        const newFilm = new Film(title,director,url)

        ui.addFilmToUI(newFilm) //Arayüze film ekleme
        storage.addFilmToStorage(newFilm) //Storage a film ekleme
        ui.displayMessages("Film başarıyla eklendi...","success")
    }

    ui.clearInputs(titleElement,directorElement,urlElement)

    e.preventDefault()
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target)
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)

        ui.displayMessages("Film silindi...","success")
    }
}

function clearAllFilms(e){
    if(confirm("Tüm filmleri sil?")){
        ui.clearAllFilmsFromUI()
        storage.clearAllFilmsFromStorage()
    }
    
    ui.displayMessages("Tüm filmler silindi","danger")
}