class Storage{

    static addFilmToStorage(newFilm){
        let films = this.getFilmsFromStorage()
        films.push(newFilm)
    
        localStorage.setItem("films",JSON.stringify(films)) //Array i string çevirir
    }
    
    static getFilmsFromStorage(){
        let films
        if(localStorage.getItem("films") === null){
            films = []
        }
        else{
            films = JSON.parse(localStorage.getItem("films")) //String i array e çevirir
        }
    
        return films
    }
    
    static deleteFilmFromStorage(filmTitle){
        let films = this.getFilmsFromStorage()
        films.forEach(function(film,index){
            if(film.title === filmTitle){
                films.splice(index,1) //Bulunan index den 1 eleman siler
            }
        })
        localStorage.setItem("films",JSON.stringify(films))
    }
    
    static clearAllFilmsFromStorage(){
        localStorage.removeItem("films")
    }
    
}