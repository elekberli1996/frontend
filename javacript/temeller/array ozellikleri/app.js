let value;
const numbers=[1,2,3,4,5,6,"emin"];
 value=numbers.length;
 value=numbers[0];
 numbers[2]=1000;
 numbers.push(200);//sonuna elave
 numbers.unshift(333);// basina elave
 numbers.pop();//sonundan atma
 numbers.shift(); //basindan atma
 numbers.splice(0,3);//belli alani atma
 numbers.reverse();//ters cevir
 
 value=numbers.sort(function(x,y){
     return x-y
 })
 value=numbers.sort(function(x,y){
    return y-x
})
value = numbers.indexOf("emind");
 console.log(value);