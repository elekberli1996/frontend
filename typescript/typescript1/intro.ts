function selam(isim:string){
    return "merhaba" +isim
}

let mesaj=selam("merhaba");
console.log(mesaj);
//number
let sayi:number=6;
sayi=10;
sayi=10.5;
//string
let yazi:string="adana";
yazi="aa";
//boolean
let dogru:boolean=false;
dogru=true;
//referans
let array:number[]=[1,2,3,];
let array2:Array<number>=[1,2,3];
let a:[number,string]=[2,"ee"];
//enum
enum Renk {kirmizi=1,yesil,goy};
let reng:Renk=Renk.kirmizi;
//any
let not:any="string";
not=5;
//void 
//deyer dondurmek istemiyoruz

let deger:void=undefined;

function selem():void{
    console.log("salam");
  //  return 5; olmaz
}

//undefined
let yaz:number; //undifaned deyer atmadin
//null referans tiplerde kullnailir
class muster{
    //new elemedin null referans yaratmadin

}








