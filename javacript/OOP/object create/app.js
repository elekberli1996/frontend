//bir obje yaratan zaman prototipin basqa objeden alir

const obj ={
    test1: function (){
        console.log("test1");
    },
test2: function(){
    console.log("test2");
}}
const emo=Object.create(obj);
emo.name="mustafa";
emo.age=25;

console.log(emo);

function Person(){

}
Person.prototype.test3=function(){
    console.log("test3");
}
Person.prototype.test4=function(){
    console.log("test4");
}

function Employe(name,age){
    this.name=name;
    this.age=age;
   
}




Employe.prototype=Object.create(Person.prototype);
Employe.prototype.mytest=function(){
        console.log("salam");
    }
let a= new Employe("emin",27);
console.log(a);




















