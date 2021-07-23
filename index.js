function findMatching(drivers, name) {
    return drivers.filter(element => 
        element.toUpperCase() === name.toUpperCase())     //.filter receives a callback function
}                                                        //.filter returns a new array

// function findMatching(drivers, name) {
//     return drivers.filter(function (el) { 
//         return el.toUpperCase() === name.toUpperCase; });
// }

function fuzzyMatch(drivers, name) {
    return drivers.filter(el =>
        el.toLowerCase().indexOf(name.toLowerCase()) === 0
    )
}

function matchName(drivers, name) {
    return drivers.filter(el => el.name === name)
}