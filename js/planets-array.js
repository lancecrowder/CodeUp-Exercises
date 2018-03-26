(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);
    planets.unshift("Sun");
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    var byeSun = planets.shift();
    console.log(planets);
    console.log("The "+ byeSun + " isn't a planet!");

    console.log('Removing "Pluto" from the end of the planets array.');
    var byePluto = planets.pop();
    console.log(planets);
    console.log(byePluto + " needs to learn to clean up after itself!");

    console.log('Finding and logging the index of "Earth" in the planets array.');
    var thirdRock = planets.indexOf("Earth");
    console.log("The index of Earth is " + thirdRock);

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);
})();
