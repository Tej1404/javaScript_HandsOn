let numbers=[1,2,3,4,5];

document.getElementById("template1").innerHTML=numbers;
function filterLogic(numbers){
    // let num = [],counter=0;
    let num=0;
    for(let i=0; i<numbers.length; i++){
        num+=numbers[i];
    }
    return num;
}

// console.log(mapLogic(numbers));
document.getElementById("template2").innerHTML=filterLogic(numbers);