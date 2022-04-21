//replace
const cardbody=document.querySelectorAll(".card-body")[1];

const  newelement=document.createElement("h3");
newelement.className="card-title";
newelement.id="tasks-title";
newelement.textContent="yeni";
const oldelemet=document.querySelector("#tasks-title");
cardbody.replaceChild(newelement,oldelemet);
console.log(newelement);