function UI() {

}



UI.prototype.addnewfilms = function (newFilm) {
    const films = document.querySelector("#films");
    films.innerHTML += `<tr>
                                            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                                            <td>${newFilm.isim}</td>
                                            <td>${newFilm.yonetmen}</td>
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr>`


}

UI.prototype.addalarm = function (type, message) {
    const body = document.querySelectorAll(".card-body")[0];


    const div = document.createElement("div");
    div.textContent = message;
    div.className = `alert alert-${type}`
    body.appendChild(div);


    window.setTimeout(function () {
        div.remove();
    }, 2000)



}

UI.prototype.uisil=function(element){
    element.parentElement.parentElement.remove();
}

UI.prototype.load=function(element)
{
    element.forEach(film => {
        this.addnewfilms(film);
    });

}

UI.prototype.arrayal=function(){
    let array = [];
    for (let i = 0; i < films.children.length; i++) {
        array.push(films.children[i].children[1].textContent);

    }   
    return array;
}
UI.prototype.filmarama=function(){
    let ara= filmara.value.toLowerCase();

    for (let i = 0; i < films.children.length; i++) {
       const aranacak= films.children[i].children[1].textContent.toLowerCase();

    if(aranacak.indexOf(ara) != -1){
        const element =films.children[i].children[1].parentElement;
        element.setAttribute("style","display: block !important");
        console.log(aranacak.indexOf(ara));

      }
      else{
        const element =films.children[i].children[1].parentElement;
        element.setAttribute("style","display: none !important");
   
       
    }
    }
}

UI.prototype.butsil = function () {
    const filmsall = document.querySelector("#films");
    while (filmsall.firstElementChild !== null)

    {

        filmsall.firstElementChild.remove();
    }
}