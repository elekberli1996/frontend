/// set ler 1 deyeri yanliz bir defe dasiyar

const myset= new Set();
myset.add(100);
myset.add(100);
myset.add(true);
myset.add([1,2,3]);
myset.add({a:4,b:6});

const myset2= new Set([100,2,3.12,"mustafa"]);
console.log(myset);
console.log(myset2);

console.log(myset.size);

myset.delete("Mustafa");

console.log(myset.has(100));
console.log(myset.has([1,2,3]))

myset.forEach(function(e){
    console.log(e);
})

for (let v of myset){
    console.log(v);

}

const array= Array.from(myset);
console.log(array);
























































