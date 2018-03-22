
function showMultiplicationTable(yourNumber = prompt("Pick a Number, any Number!")){
    yourNumber=Number(yourNumber);
    for (var i = 1; i <= 10; i++){
        console.log(yourNumber +" * "+i+" = "+ (yourNumber*i))
    }
}

showMultiplicationTable();