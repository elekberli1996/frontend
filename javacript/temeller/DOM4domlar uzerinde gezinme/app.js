let value;
const todolist=document.querySelector(".list-group");
const todo=document.querySelector(".list-group-item:nth-child(2)");
const cardrow=document.querySelector(".card.row");

//childNode textlerler birlikde cixaror
//cildren yanliz elementleri cixarir
value=todolist.children[0];
value=todolist.children[todolist.children.length-1];
value=todolist.children[2].textContent="degisti";
value=cardrow
value=cardrow.children;
value=cardrow.children[2].children[1];
value=todolist.firstElementChild;
value=todolist.lastElementChild;
value=todolist.children.length;
value=todolist.childElementCount;
value=cardrow.parentElement; //elemenet parentleri
// element kardesleri
value=todo;
value=todo.previousElementSibling;
value=todo.nextElementSibling;



console.log(value);