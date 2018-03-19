var lMdays = prompt("How many days are you renting Little Mermaid?");
var bBdays = prompt("How many days are you renting Brother Bear?");
var hDays = prompt("How many days are you renting Hercules?");

var price = 3;

var littleMermaid = (price * lMdays);

var brotherBear= (price * bBdays);

var hercules = (price * hDays);

var total = (littleMermaid + brotherBear + hercules);

alert("Your Total is $" + total);

