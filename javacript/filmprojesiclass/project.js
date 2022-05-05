const form = document.querySelector("#film-form");

const isiminput = document.querySelector("#title");

const yonetmeninput = document.querySelector("#director");

const urlinput = document.querySelector("#url");

const cardbody = document.querySelectorAll(".card-body")[1];

const sil = document.querySelector("#clear-films");

const filmara=document.querySelector("#filmara");

//console.log(films.children[1].children[1].parentElement);

eventAdd();



function eventAdd() {
    form.addEventListener("submit", filmekle);
    document.addEventListener("DOMContentLoaded", loadfilms);
    cardbody.addEventListener("click", silme);
    sil.addEventListener("click", hepsinsil);
    filmara.addEventListener("keyup",filmarama);


}
    function filmarama(){

        UI.filmarama();
   

}




function hepsinsil() {
    if (confirm("tum filmleri silmek icin eminmisiniz?") === true) {
        LS.butunsil();
        UI.butsil();
    } 
}


function silme(e) {
    if (e.target.className === "btn btn-danger") {

        LS.lssil(e.target);
        UI.uisil(e.target);
        //e.target.parentElement.parentElement.remove();
        //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

    }

}


function loadfilms() {
    const films = LS.getstorageitem();
  UI.load(films);
   
}




function filmekle(e) {

    const isim = isiminput.value;

    const yonetmen = yonetmeninput.value;

    const url = urlinput.value;


    const array=UI.arrayal();

    


    if (array.includes(isim) === true) {
        UI.addalarm("danger", "ayni film ekleyemezsiniz");
    } else {

        if (isim == "" || yonetmen == "" || url == "") {

            UI.addalarm("danger", "tum bosluklari doldurun");

        } else {

            const newFilm = new Film(isim, yonetmen, url);

            UI.addnewfilms(newFilm);
            UI.addalarm("success", "film basariyla eklendi");
            LS.lsadd(newFilm);


        }
    }
    e.preventDefault();
}









