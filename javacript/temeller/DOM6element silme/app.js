const todolist=document.querySelector("ul.list-group");
const todos=document.querySelectorAll("li.list-group-item");

//todos[2].remove;

todolist.removeChild(todolist.lastElementChild);
todolist.removeChild(todos[2]);
todos[1].remove();
console.log(todolist);
console.log(todos);