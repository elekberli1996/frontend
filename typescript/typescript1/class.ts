 class Ev {
     odasayisi:number;
     kat:number;
     penceresayi:number;
     constructor(odasayisi:number,kat:number,penceresati:number){
         this.odasayisi=odasayisi;
         this.kat=kat;
         this.penceresayi=penceresati;
     }
     yemek() {
         console.log(this.kat+"katda yemek yeyildi");
         
     }
 }

 let ev= new Ev(3,4,5);
 ev.yemek();

//inheritance miras alma extend

class Kisi{
    kaydet(){
    console.log("kisi kaydetildi");
    }

}

class Musteri extends Kisi{
    satisyap(){
        console.log("satis yapildi");
    }
   private _isim:string;


   set isim(ad:string){
       this._isim=ad;
   }
   get isim(){
       return "sayin  "+ this._isim;
   }
}

class Personel extends Kisi{
    mass(){
        console.log("maas odendi");
    }

}

let musteri =new Musteri();
let personel= new Personel();

musteri.kaydet();
musteri.satisyap();
personel.kaydet();
personel.mass();


//private
//public..
//protected

//gettter setter

musteri.isim="emin";
console.log(musteri.isim);



























