var message = 'Hello, World!';
console.log(message);
// The parameter's type annotation is an object type
var names = ["Alice", "Bob", "Eve", 10];
// Contextual typing for function - parameter s inferred to have type string
var typedNames = names.map(function (s) {
    console.log(s);
    return s;
});
console.log(typedNames);
// Contextual typing also applies to arrow functions
names.forEach(function (s) {
    console.log(s);
});
