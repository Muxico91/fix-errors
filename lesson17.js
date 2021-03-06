/* Assuming you completed lesson 15 and 16 properly. Now rewrite
the anonymous function using the arrow function.

Expected  output in console:

        This Ran 0
        This Ran 1 
        ['John', 'Roger']
*/
var people = [
    { name: "John", age: 56 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
]


var nameFilter = function(filteredName, anonymousFunction) {
    var results = []
    for (var i = 0; i < people.length; i++) {
        let currentName = people[i].name
        if (currentName != filteredName) {
            anonymousFunction(i + 1);
            results.push(currentName)

        }
    }

    return results
}

var filteredNames = nameFilter("Betty", (x) => {
    x === 1 ? console.log("This Ran " + x + " time.") : console.log("This Ran " + x + " times.");
})
console.log(filteredNames)
