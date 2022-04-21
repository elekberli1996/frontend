const todoform = document.querySelector("#todo-form");

const inputTodo = document.getElementById("todo");

const listGroup = document.querySelector(".list-group");

const cardBody1 = document.querySelectorAll(".card-body")[0];

const cardBody2 = document.querySelectorAll(".card-body")[1];

const filter = document.querySelector("#filter");

const clearButon = document.querySelector("#clear-todos")

addevent();

function addevent()
{
    todoform.addEventListener("submit",todoekle);
}


function todoekle(e)
{


    const newtodo=inputTodo.value.trim();
    todoeklendi(newtodo);

    console.log(inputTodo.value);


    e.preventDefault();
}

function todoeklendi(newtodo)
{
    /* <li class="list-group-item d-flex justify-content-between">
    Todo 1
    <a href = "#" class ="">
        <i class = "fa fa-remove"></i>
    </a>

</li>*/
    const yenielement=document.createElement("li");
    yenielement.className="list-group-item d-flex justify-content-between";
    const ay=document.createElement("a");
    ay.href="#";
    ay.className="delete-item";
    ay.innerHTML="<i class = 'fa fa-remove'></i>";

    yenielement.appendChild(document.createTextNode(newtodo));
  yenielement.appendChild(ay);

  
    //let textnod= document.createTextNode("");
  
    
    //ay.appendChild(textnod);
    
    listGroup.appendChild(yenielement);
  
    //listGroup.appendChild(newtodo);




    console.log(listGroup);


};






//console.log(todoform);