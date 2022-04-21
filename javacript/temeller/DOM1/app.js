 let value;
 console.log(document);
 value = document;
 value=document.all;
 value=document.all.length;
 value=document.all[6];
 value=document.all[document.all.length-1];
 //console.log(value);

 /*const elements=document.all;
 for(let i=0;i<elements.length;i++){
     console.log(elements);
 } */

/*const collections= Array.from(document.all);
console.log(typeof collections);
collections.forEach(function(collections)
{
    console.log(collections);
})*/
value=document.body;
value=document.head;
value=document.location;
value=document.location.hostname;
value=document.URL;
//script
value=document.scripts;
value=document.scripts.length;
value=document.scripts[0];
value=document.links;
value=document.links[0];
value=document.links[document.links.length-1];
value=document.links[document.links.length-1].getAttribute("class");
value=document.links[document.links.length-1].getAttribute("href");
value=document.links[document.links.length-1].className;
value=document.links[document.links.length-1].classList;

//form
value=document.forms;
value=document.forms.length;
value=document.forms[0];
value=document.forms["from1"];
value=document.forms[0].id;
value=document.forms[0].getAttribute("id");
value=document.forms[0].name;
value=document.forms[0].method;


console.log(value);









































































