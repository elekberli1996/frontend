function UI() {

}
 const films = document.querySelector("#films");
 const body=document.querySelectorAll(".card-body")[0];

UI.prototype.addnewfilms = function (newFilm) {

    films.innerHTML += `<tr>
                                            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                                            <td>${newFilm.isim}</td>
                                            <td>${newFilm.yonetmen}</td>
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr>`


}

UI.prototype.addalarm= function(type,message){
    

    const div= document.createElement("div");
    div.textContent=message;
    div.className=`alert alert-${type}`
    body.appendChild(div);


    window.setTimeout(function(){
        div.remove();
    },2000)



}

UI.prototype.butsil=function(){
    const filmsall=document.querySelector("#films");
    while(filmsall.firstElementChild="null")
  
    {
  
      filmsall.firstElementChild.remove();
    }
}






