let names=["teja","venkat","nikhil","karthik"];

// document.getElementById("template1").innerHTML=numbers;
function forEachLogic(names){
    // let num = [],counter=0;
    let text="";
    for(let i=0; i<names.length; i++){
        text=text+names[i]+"<br>";
    }
    console.log(text);
    return text;
}

// console.log(mapLogic(numbers));
document.getElementById("template1").innerHTML=forEachLogic(names);