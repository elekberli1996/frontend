//session storage key ve value
//butonnlar
const add= document.querySelector("#add");
const del =document.querySelector("#delete");
const clear= document.querySelector("#clear");

//inputlar

const addKey =document.querySelector("#addkey");
const addvalue =document.querySelector("#addvalue");
const deletekey =document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",claerItem);

function addItem(e)
{
 sessionStorage.setItem(addkey.value,addvalue.value);
}

function deleteItem(e)
{
sessionStorage.removeItem(deletekey.value);
}
function claerItem(e)
{
sessionStorage.clear();
}























































