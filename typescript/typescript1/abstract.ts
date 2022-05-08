//abstract classlar
abstract class KrediBase{
    constructor(){ 

    }
    kaydet(){
        console.log("kaydedildi");

    }
    abstract hesabla():void;
}

class TukediciKredi extends KrediBase{
    hesabla(): void {
       console.log("hesabla islemi");
    }
    constructor(){
        super();
    }
}

class MorgocKredi extends KrediBase{
    hesabla(): void {
       console.log("morgoc hesabla islemi");
    }
    constructor(){
        super();
    }
}

let tuketici = new TukediciKredi();
tuketici.hesabla();
tuketici.kaydet();

let morgoc= new MorgocKredi();
morgoc.hesabla();
morgoc.kaydet();

