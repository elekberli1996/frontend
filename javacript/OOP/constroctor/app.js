function Employee(name,age,salary)//buyuk harfli olmali

//yapici fonksyon
{
    this.name=name;
    this.age=age;
    this.salary=salary;

console.log(this);
}
const emp1= new Employee("emin",27,2000);
console.log(emp1);
const emp2= new Employee("evez",31,2000);
console.log(emp2);










