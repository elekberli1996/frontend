//funksyonlara giris
function topla(x,y){
    return x+y;
}
function topla2(x:number,y:number):number{
    return x+y;
}

function stringtopla(x:string,y:string):string{
    return x+y;
}

console.log(topla(2,3));
console.log(topla(3,"fss"));
console.log(topla2(4,5));
console.log(stringtopla("salam","emin"));

//optioanal default paramatrs
function topla3(x:number,y:number=4):number{
    return x+y;
}

console.log(topla3(5));


function topla4(x:number,y?:number):number{
  
  if(y){
    return x+y;}
    return x;
}

console.log(topla4(7,7));

//optional default en sonda olmalidir


//rest parametreler

function dv(ileleman:string,...sonrakilar:string[]):string
{
    return ileleman+ " "+ sonrakilar.join("  ");
}

console.log("ahmet","emin","salam");


