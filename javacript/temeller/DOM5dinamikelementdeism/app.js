

const newlink=document.createElement("a");

const cardbody=document.getElementsByClassName("card-body")[1];

newlink.id="clear-todos";
newlink.className="btn btn-success";

newlink.href="http://www.google.com";
newlink.target= " _blank ";

newlink.appendChild(document.createTextNode("farkli sayfaya git"));

cardbody.appendChild(newlink);

//console.log(newlink);



