const filterInput = document.querySelector("#filter");
const todoForm= document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(e)
{
    console.log("salam");


e.preventDefault();  //sayfa yenilenmesini engeller;
}

//focus eventi
// 1ci yontem;
filterInput.onfocus=function(){
    console.log("merhaba");
}

//2ci yontem
filterInput.addEventListener("focus",function (e) {
    console.log("naber");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);
console.log(e.target.className);


})



