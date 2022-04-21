//local storge
localStorage.setItem("1","merhaba");
localStorage.setItem("tekrar",50);

const value=localStorage.getItem("tekrar");

//localStorage.clear();

if (localStorage.getItem("sport")===null){
    console.log("aradiginiz veri bulunmuyor");
}

// array yazma 
const todos =["q","2","3"];
localStorage.setItem("todos",JSON.stringify(todos));

const value1=JSON.parse(localStorage.getItem("todos")); 
console.log(value1);






























