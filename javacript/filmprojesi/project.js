const form= document.querySelector("#film-form");

const isiminput=document.querySelector("#title");

const yonetmeninput=document.querySelector("#director");

const urlinput=document.querySelector("#url");

const cardbody =document.querySelectorAll(".card-body")[1];

const sil=document.querySelector("#clear-films");




eventAdd();

const ui=new UI();

const ls=new LS();









function eventAdd()
{
 form.addEventListener("submit",filmekle);
 document.addEventListener("DOMContentLoaded",loadfilms);
cardbody.addEventListener("click",silme);
sil.addEventListener("click",hepsinsil);


}
function hepsinsil(){
    ls.butunsil();
    ui.butsil();
 
}


function silme(e){
 if(e.target.className==="btn btn-danger"){
   
   ls.lssil(e.target.parentElement.parentElement.children[1].textContent);
  e.target.parentElement.parentElement.remove();
      
 }
   
}




function loadfilms(){
const films=ls.getstorageitem();
films.forEach(film => {
    ui.addnewfilms( film);
});
}



function filmekle(e){


    const isim = isiminput.value;

    const yonetmen = yonetmeninput.value;

    const url = urlinput.value;

    if(isim=="" || yonetmen=="" || url=="")
    {
    
        ui.addalarm("danger","tum bosluklari doldurun");
      
    }

    else
    {
     
        const newFilm =new Film(isim,yonetmen,url);
        
        ui.addnewfilms(newFilm);
        ui.addalarm("success","film basariyla eklendi");
        ls.lsadd(newFilm);
        
    
    }


    e.preventDefault();
}