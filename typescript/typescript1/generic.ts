function deger1<T>(sayi:T):T{
    return sayi;

}
let sayi1= deger1<number>(3);
let  sehir1=deger1<string>("ankara");


//generic siniflar
class deger3<T>{
    aaa:T;
    calis (deger5:T){

        console.log(deger5);
    }

}