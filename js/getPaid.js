var googleDays = prompt("How many days did you work for Google?");
var amazonDays = prompt("How many days did you work for Amazon?");
var facebookDays = prompt("How many days did you work for Facebook?");

var total = ((googleDays * 400)+(amazonDays*380)+(facebookDays*350));

alert("You've made $"+total);