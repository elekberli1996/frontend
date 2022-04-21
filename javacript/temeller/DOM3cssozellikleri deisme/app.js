let elements=document.querySelector("#clear-todos");
elements.className="btn btn-warning";
elements.style.color="red";
elements.style.marginLeft="100px";
elements.href="http://www.google.com";
elements.target="_blank";
elements.textContent="merhaba";
elements.innerHTML="<span style='color:green'>silin</span>"

let element1=document.querySelectorAll(".list-group-item");
element1.forEach(function(el)
{
    el.style.color="red";
    el.style.background="green";
})

let element2=document.querySelector("li:last-child");

element2.style.color="black";
let element3=document.querySelector("li:nth-child(2)");

element3.style.color="black";
let element4=document.querySelectorAll("li:nth-child(odd)"); //1 3 5 7 secer
let element5=document.querySelectorAll("li:nth-child(even)"); // 2 4 6 8 secer
element4.forEach(function(el)
{
    el.style.background="blue";
})

 































