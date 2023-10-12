let numbers=[1,2,3,4,5,6];

document.getElementById("template1").innerHTML=numbers;
function filterLogic(numbers){
    let num = [],counter=0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]%3==0){
            num[counter]=numbers[i];
            counter+=1;
        }
    }
    return num;
}

// console.log(mapLogic(numbers));
document.getElementById("template2").innerHTML=filterLogic(numbers);