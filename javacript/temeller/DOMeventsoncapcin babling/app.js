//event bobbling
/*document.querySelector(".container").addEventListener("click",function(){
    console.log("div container");
});
document.querySelector(".card.row").addEventListener("click",function(){
    console.log("card row");
});
document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
    console.log("card body");
});*/

//event capturing veya delagation
const cardBody =document.querySelectorAll(".card-body")[1];
cardBody.addEventListener("click",run);

function run(e){
    if(e.target.className==="fa fa-remove")
    {
        console.log("silme islemi");
    }
    if (e.target.id==="filter")
    {
        console.log("filterleme islemi");
    }

    if (e.target.id==="clear-todos")
    {
        console.log("tum taslaklari sil");
    }
}





