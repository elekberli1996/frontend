const form = document.querySelector("#film-form");

const isiminput = document.querySelector("#title");

const yonetmeninput = document.querySelector("#director");

const urlinput = document.querySelector("#url");

const cardbody = document.querySelectorAll(".card-body")[1];

const sil = document.querySelector("#clear-films");

const filmara=document.querySelector("#filmara");



eventAdd();

const ui = new UI();

const ls = new LS();

function eventAdd() {
    form.addEventListener("submit", filmekle);
    document.addEventListener("DOMContentLoaded", loadfilms);
    cardbody.addEventListener("click", silme);
    sil.addEventListener("click", hepsinsil);
    filmara.addEventListener("keyup",filmarama);


}
    function filmarama(){

        ui.filmarama();
   

}




function hepsinsil() {
    if (confirm("tum filmleri silmek icin eminmisiniz?") === true) {
        ls.butunsil();
        ui.butsil();
    } 
}


function silme(e) {
    if (e.target.className === "btn btn-danger") {

        ls.lssil(e.target);
        ui.uisil(e.target);
        //e.target.parentElement.parentElement.remove();
        //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

    }

}


function loadfilms() {
    const films = ls.getstorageitem();
    ui.load(films);
   
}




function filmekle(e) {

    const isim = isiminput.value;

    const yonetmen = yonetmeninput.value;

    const url = urlinput.value;


    const array=ui.arrayal();

    


    if (array.includes(isim) === true) {
        ui.addalarm("danger", "ayni film ekleyemezsiniz");
    } else {

        if (isim == "" || yonetmen == "" || url == "") {

            ui.addalarm("danger", "tum bosluklari doldurun");

        } else {

            const newFilm = new Film(isim, yonetmen, url);

            ui.addnewfilms(newFilm);
            ui.addalarm("success", "film basariyla eklendi");
            ls.lsadd(newFilm);


        }
    }
    e.preventDefault();
}









