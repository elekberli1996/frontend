

//calll aply bind
const obj1={
    number1:30,
    number2:40
};
const obj2={
    number1:50,
    number2:40
};

function addNumbers(number3,number4){
    console.log(this.number1+this.number2+number3+number4);
}
addNumbers.call(obj1,100,29);
addNumbers.apply(obj2,[2,3]);

//bind

function getnumbertotal(number3,number4){
    return this.number1+this.number2+number3+number4;
}

const copy1=getnumbertotal.bind(obj1);
const copy2=getnumbertotal.bind(obj2);
console.log(copy1(1,1));
console.log(copy2(1,1));