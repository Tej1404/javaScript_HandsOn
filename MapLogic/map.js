let numbers=[1,2,3,4];

document.getElementById("template1").innerHTML=numbers;
function mapLogic(numbers){
    let num = [];
    for(let i=0; i<numbers.length; i++){
        num[i]=numbers[i]*10;
    }
    return num;
}

// console.log(mapLogic(numbers));
document.getElementById("template2").innerHTML=mapLogic(numbers);