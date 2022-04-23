// maplar key(anahtar) value(deyer)

let myMap= new Map();

console.log(myMap);

const key1="emin";
const key2={a:4,b:5};
const key3= ()=>2;
//set
myMap.set(key1,"string");
myMap.set(key2,"objeck");
myMap.set(key3,"function");
//
console.log(myMap.get(key1));

console.log(myMap);

console.log(myMap.size);


const citi= new Map();

citi.set("ankara",5);
citi.set("istanbul",4);
citi.set("nax",6);

citi.forEach(function(value,key){
console.log(key,value);
});

for(let [key,value] of citi){
    console.log(key,value);
}


for(let key of citi.keys()){
    console.log(key);
}

for(let value of citi.values()){
    console.log(value);
}

const array =[["key1","value1"],["key2","value2"]];

const lastMap=new Map(array);

console.log(lastMap);


const array1=Array.from(citi);
console.log(array1);
