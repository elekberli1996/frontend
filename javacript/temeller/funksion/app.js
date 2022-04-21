function meerhaba(){
    console.log("merhaba");
}
function merhaba(name="bigi yok",age="bigi yok"){
  /*  if(typeof name==="undefined")  
    {
        console.log("bilgi yok");
    }
    if(typeof age==="undefined"){
        console.log("bilgi yok");
    }*/
  //  else{
    console.log(`isim:${name} yaz:${age}`);
}
merhaba();
merhaba("emin",27);


function square(x)
{
    
   return x*x;
     

}
console.log(square(13));
//function expression
const m=function(name){
    console.log("merheba"+name);
}
m("emin");

//immediately invoked function expression
//IIFE
(function(name){
    console.log("merhaba" +name);
}("murat"));

//anonim funcsionlar
