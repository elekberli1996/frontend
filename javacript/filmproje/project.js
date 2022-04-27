const form = document.querySelector("#film-form");

const title=document.querySelector("#title");

const director=document.querySelector("#director");

const  url =  document.querySelector("#url");

 

addevent();

const ul = new UL();

function addevent(){

    form.addEventListener("submit",filmekle);

}

function filmekle(e)
{ 
    const title1 = title.value;
    const director1 = director.value;
    const url1 = url.value;
   
  
 const Newfilm =new Film(title1,director1, url1);

   ul.addFilm(Newfilm);

    
  

    e.preventDefault();   
}










