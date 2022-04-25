// javacsriptin farki
//class tabanli deil deil eksine prototype tapanli dil
//CLASSlar bulunmur
// epmascript 6da ise class tipli yazilsada arka planda prototype donsudurulur
//her bir objenin icinde prototpye ozzelliyir var
//en temel object kontructor

//objevtden miras aliyor


//buyuk avantaji prototiv kimi elave etmek olar


function Employee(name,age,salary)//buyuk harfli olmali

//yapici fonksyon
{
    this.name=name;
    this.age=age;
    this.salary=salary;

console.log(this);
}


Employee.prototype.showinfo= function(){
    console.log("isim:"+this.name+"age:"+this.age+"salary"+this.salary);
}

const emp1= new Employee("emin",27,2000);
console.log(emp1);
const emp2= new Employee("evez",31,2000);
console.log(emp2);
emp1.showinfo();










