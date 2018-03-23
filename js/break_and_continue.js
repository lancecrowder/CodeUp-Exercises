var userNumber = prompt("Please, enter a number between 1 and 50.");

for (i=1; i<=50; i++) {
    if (i==userNumber) {
        console.log("Yikes! Skipping number: " + i);
    }
        else if (i % 2 === 0){
        continue;
    } else {
        console.log("Here is an odd number: " + i);
    }
}
