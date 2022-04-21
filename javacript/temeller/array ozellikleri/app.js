let value;
const numbers=[1,2,3,4,5,6,7];
 value=numbers.length;
 value=numbers[0];
 numbers[2]=1000;
 numbers.push(200);//sonuna elave
 numbers.unshift(333);// basina elave
 numbers.pop();//sonundan atma
 numbers.shift(); //basindan atma
 numbers.splice(0,3);//belli alani atma
 numbers.reverse();//ters cevir
 value = numbers.indexOf(7);
 value=numbers.sort(function(x,y){
     return x-y
 })
 value=numbers.sort(function(x,y){
    return y-x
})

 console.log(value);