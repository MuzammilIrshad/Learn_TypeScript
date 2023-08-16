let message: string = 'Hello, World!';
console.log(message);

// The parameter's type annotation is an object type
const names = ["Alice", "Bob", "Eve", 10];
 
// Contextual typing for function - parameter s inferred to have type string
const typedNames = names.map(function (s):string | number {
  console.log(s);
  return s
});
 console.log(typedNames)
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s);
});