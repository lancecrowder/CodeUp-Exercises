var classFilled = confirm("Is this class full?");
var classConflict = confirm("Does this class conflict with your current schedule?");

var canEnroll = !classFilled && !classConflict;

alert(canEnroll);