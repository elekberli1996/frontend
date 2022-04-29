const form= document.querySelector("#film-form");

const isiminput=document.querySelector("#title");

const yonetmeninput=document.querySelector("#director");

const urlinput=document.querySelector("#url");

eventAdd();

const ui=new UI();





function eventAdd()
{
 form.addEventListener("submit",filmekle);
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
        
    
    }


    e.preventDefault();
}