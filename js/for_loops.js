var anyNumber  = prompt("Pick a Number, any Number!");

function showMultiplicationTable(anyNumber){
    parseFloat(anyNumber);
    for (var i = 1; i <= 10; i++){
        console.log((anyNumber) +" * "+(i)+" = "+ (anyNumber*i))
    }
}

showMultiplicationTable(anyNumber);