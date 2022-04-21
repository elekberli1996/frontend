const cardBody=document.querySelectorAll(".card-body")[1];
const title= document.querySelector("#tasks-title");
//click
//title.addEventListener("click",run);
//doubleclick
//title.addEventListener("dblclick",run);
//mousedown
//title.addEventListener("mousedown",run);
//mouse up
//title.addEventListener("mouseup",run);
//mouse over
title.addEventListener("mouseover",run);
//mouseout
title.addEventListener("mouseout",run);

//mous enter mouse liv 1 defe event olur basqa elementlerde olmur
function run(e)

{
console.log(e.type);
}