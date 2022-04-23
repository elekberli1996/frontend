arr=[100,200,300,400];
let [aa,bb]=arr;
console.log(aa,bb);

//destructing

//obje distructor
const number={
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
}

const {a,d,c,e}=number;
console.log(a,d,c,e);

//function destructor

const getLangs= () => ["c","c#","c++"];
const [el1,el2,el3] =getLangs();
console.log(el1,el2,el3);









