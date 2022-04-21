//keypress
//document.addEventListener("keypress",run);

function run(e)
{ console.log(e.key);
   // console.log(e.which);
    console.log("naber");
   
}
//keydoown tusu basan zaman
//document.addEventListener("keydown",run1);
function run1(e){
    console.log(e.key);
}

//keyupp tusu birakan zaman
//document.addEventListener("keyup",run2);
function run2(e){
    console.log(e.key);
}

const header =document.querySelector(".card-header");
const todo=document.querySelector("#todo");


todo.addEventListener("keyup",run4);

function run4(e){
    console.log(e.target.value);
    header.textContent=e.target.value;
}










