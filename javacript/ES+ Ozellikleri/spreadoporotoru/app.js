//spread operatoru
const a=["1","2","30"];
console.log(...a);

const number=[1,2,3,4,5,6,7,8,9];
const [aa,b,...number2]=number;
console.log(aa,b,number2);



const addNumber= (a,b,c) => console.log(a+b+c);

const numbers=[100,200,444];

addNumber(...numbers);