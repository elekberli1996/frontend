function UL (){

}



UL.prototype.addFilm = function (Newfilm){

    console.log();

    const film = document.querySelector("#films");

    film.innerHTML +=`
    <tr>
                                            <td><img src="${Newfilm.url}" class="img-fluid img-thumbnail"></td>
                                            <td>${Newfilm.isim}</td>
                                            <td>${Newfilm.yonetmen}</td>
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr>
    
    `
}
