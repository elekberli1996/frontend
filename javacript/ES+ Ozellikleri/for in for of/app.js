const person={
    name:"emin",
    age:27,
    salary:1000

};

const array =[1,2,"3344","saalam"];

const aa="merhaba";


for  (let a in person){
    console.log(a,person[a]);
}

for(let a in array){
    console.log(a,array[a]);
}

for(let a in aa){
    console.log(a,aa[a]);
}

// obejelerde for off dongusu kullanmaz

for(let a of array){
    console.log(a);
}
for(let a of aa){
    console.log(a);
}