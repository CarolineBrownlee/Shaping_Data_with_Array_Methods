const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

// grabs id from <section> container in index.html
const planetEl = document.getElementById("planets")
// forEach loops through the plants array and for each planet, puts that planet on the dom 
planets.forEach(planet => {
    planetEl.innerHTML += 
    `<section>${planet}</section>`
})

/*
Use the map method to create a new array where the
first letter of each planet is capitalized. Use the
// to UpperCase() method on strings.

*/

// maps through the planet array, 
const planet = planets.map(planet => {
    // returns each planet's upperCast first letter (charAt(0) = the index of the first character in a string (index starts with 0)),
    return planet.charAt(0).toUpperCase() 
    // and adds the rest of the letters for each planet starting with the second character. Second character = (1).
    + planet.slice(1)
})
console.log(planet)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

// filters through the planets array and for each planet checks to see if it includes the letter "e". 
const planetIncludesE = planets.filter(planet => planet.includes("e"))
console.log(planetIncludesE)