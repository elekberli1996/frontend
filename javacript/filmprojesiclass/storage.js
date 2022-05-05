class LS
{
    static lsadd(newFilm){
  
        let film=this.getstorageitem();
        film.push(newFilm);
        localStorage.setItem("film",JSON.stringify(film));
      
    }
    
    static getstorageitem()
    { let film;
        if(localStorage.getItem("film")==null){
            film=[];
        }
        else{
            film=JSON.parse(localStorage.getItem("film"));
        }
        return film;
    
    }
    
    static lssil(filmisim){
        
    let filmisim1=filmisim.parentElement.parentElement.children[1].textContent;
        const filmler= this.getstorageitem();
    
     
        filmler.forEach(function (film,index) {
    
            if(filmisim1===film.isim){
                filmler.splice(index,1);
            }
            
            
        });
    
        localStorage.setItem("film",JSON.stringify(filmler));
    }
    
    static butunsil()
    {
        
    localStorage.removeItem("film");
    }
    
    
    

}
