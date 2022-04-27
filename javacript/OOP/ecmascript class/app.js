//syntactic sugar;

class Employe {
    constructor(name,age,salary){  //constroctor
        this.name=name;
        this.age=age;
        this.salary=salary;
    }

    showInfos(){
        console.log(this.name,this.age,this,this.salary);
    }

       
}
const emp= new Employe("emin",26,4000);
emp.showInfos();