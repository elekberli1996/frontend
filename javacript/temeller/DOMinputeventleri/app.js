const filter= document.getElementById("filter");

//document.addEventListener("DOMContentLoaded",load);

function load(e)
{
    console.log("syafa yuklendi");
    
}
// focus

// blur
//filter.addEventListener("focus",run);
function run(e){
    console.log(e.type);
}

filter.addEventListener("blur",run);
function run(e){
    console.log(e.type);
}

//paste
//filter.addEventListener("paste",run);
function run(e){
    console.log(e.type);
}
//copy
filter.addEventListener("copy",run);
function run(e){
    console.log(e.type);
}

//cutt
//filter.addEventListener("cut",run);
function run(e){
    console.log(e.type);
}
//select
filter.addEventListener("select",run);
function run(e){
    console.log(e.type);
}








