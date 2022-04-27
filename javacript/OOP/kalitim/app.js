//kalitim inheriten  bir objenin basqa objeden metodlari miras aar

function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.showinfos=function(){
    console.log("isim: "+this.name+"yas: "+this.age);
};

function Employe(name,age,salary){
    //this.name=name;
    //this.age=age;
    Person.call(this,name,age);
    this.salary=salary;

    
}
Employe.prototype=Object.create(Person.prototype);

//overriding iptal etme  showinfo yazib iptal ede bilerik

const emp= new Employe("emin",34,4555);
console.log(emp);
emp.showinfos();