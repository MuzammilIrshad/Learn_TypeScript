let message: string = 'Hello, World!';
console.log(message);

function welcomePeople(x: string[] | number) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }
  welcomePeople(["hello", "world"])