var message = 'Hello, World!';
console.log(message);
// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
function printName(obj) {
    var _a, _b;
    // Error - might crash if 'obj.last' wasn't provided!
    console.log((_a = obj === null || obj === void 0 ? void 0 : obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log((_b = obj.last) === null || _b === void 0 ? void 0 : _b.toUpperCase());
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
