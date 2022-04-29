function LS()
{

}
LS.prototype.lsadd=function (newFilm){
  
    let film=getelementinlocalstorage();
    film.push(newFilm);
    localStorage.setItem("film",JSON.stringify(film));
  
}

LS.prototype.getstorageitem = function ()
{ let film;
    if(localStorage.getItem("film")==null){
        film=[];
    }
    else{
        film=JSON.parse(localStorage.getItem("film"));
    }
    return film;

}

function getelementinlocalstorage()
{ let film;
    if(localStorage.getItem("film")==null){
        film=[];
    }
    else{
        film=JSON.parse(localStorage.getItem("film"));
    }
    return film;

}

LS.prototype.lssil=function(filmisim){
    

    const filmler= getelementinlocalstorage();

 
    filmler.forEach(function (film,index) {

        if(filmisim===film.isim){
            filmler.splice(index,1);
        }
        
        
    });

    localStorage.setItem("film",JSON.stringify(filmler));
}

LS.prototype.butunsil= function ()
{
    console.log("silindi");
localStorage.removeItem("film");
}


