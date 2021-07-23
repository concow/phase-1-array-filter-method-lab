function findMatching(drivers, name) {
    return drivers.filter(element => 
        element.toUpperCase() === name.toUpperCase())     //.filter receives a callback function
}                                                        //.filter returns a new array

// function findMatching(drivers, name) {
//     return drivers.filter(function (el) { 
//         return el.toUpperCase() === name.toUpperCase; });
// }
//check if element starts with specific letters
function fuzzyMatch(drivers, letters) {
    return drivers.filter(el => el.startsWith(letters))
    // return drivers.filter(el =>
    //     el.toLowerCase().indexOf(letters.toLowerCase()) === 0
    // )
}

function matchName(drivers, name) {
    return drivers.filter(el => el.name === name)
}