// must know Array
// forEach, filter, map, find, includes, join, pop, push, reduce, sort
// slice, reverse
let array = [];

for (let i = 0; i < 20; i++) {
  array.push(i);
}

if (array.includes(100, 0)) {
  console.log("array contains 100");
} else {
  console.log("array does not contain 100");
}

console.log("contents of the array: ", array.join(", ")); //join for printing
console.log("popping from array: ", array.pop());
console.log("contents of the array: ", array.join(", "));
console.log("reversed: ", array.reverse()); //reverse acts on the original array
array.reverse();

const evenArray = array.filter((number) => {
  if (number % 2 == 0) {
    return true;
  } else return false;
});

console.log("contents of the even array: ", evenArray.join(", "));

console.log(
  "contents of the array +1 using map: ",
  array.map((number) => {
    return number + 1;
  })
);

console.log(
  "15 in the array:",
  array.find((num) => num == 15)
);
console.log(
  "first instance of a number greater than 15 in the array:",
  array.find((num) => num > 15)
);
console.log(array);

console.log(
  "contents of the array +1 using forEach: ",
  array.forEach((number) => {
    return number + 1;
  })
);

array.forEach((number) => {
  return number + 1;
}, array);

console.log("contents of the array: ", array.join(", "));

let randomArray = [];
for (let i = 0; i < 10; i++) {
  randomArray.push(Math.floor(Math.random() * 100));
}
console.log("random array = ", randomArray);
randomArray.sort();
console.log("random array = ", randomArray);
console.log("random array sliced = ", randomArray.slice(0, 5));

// other useful ones
// some, every, findIndex,

console.log(
  "are some elements in the evenArray even?",
  evenArray.some((num) => {
    return num % 2 == 0;
  })
);
console.log(
  "are some elements in the array even?",
  array.some((num) => {
    return num % 2 == 0;
  })
);
console.log(
  "is every element in the evenArray even?",
  evenArray.every((num) => {
    return num % 2 == 0;
  })
);
console.log(
  "is every element in the array even?",
  array.every((num) => {
    return num % 2 == 0;
  })
);

console.log(
  array.findIndex((number) => {
    return number > 10;
  })
);

// static:
// isInteger, isNaN, parseInt, parseFloat

console.log("parsing int abc123", parseInt("abc123"));
console.log("parsing int 123abc", parseInt("123abc"));
console.log("parsing int 123abc123", parseInt("123abc123"));

console.log("checking if 123 isInteger", Number.isInteger(123));
console.log("checking if 123 isInteger", Number.isInteger("123"));
console.log("checking if 123 isInteger", Number.isInteger("123abc"));
console.log("checking if 123 isInteger", Number.isInteger(parseInt("123abc")));

console.log("checking if '123' isNaN ", isNaN("123"));
console.log("checking if '123abc' isNaN ", isNaN("123abc"));
console.log("checking if 'abc123' isNaN ", isNaN("abc123"));
// must know Strings
// split, toUpperCase, toLowerCase
// useful ones:
// includes, charAt, slice, replace, substring, trim

let originalString = "   This is the Original String   ";

console.log(originalString);
console.log(originalString.split(" "));
console.log(originalString.toUpperCase());
console.log(originalString.toLowerCase());
console.log(originalString); //original string is not changed by toUppercase and toLowerCase

console.log(originalString.replace(" ", "*")); //replaces first instance only
console.log(originalString.substring(5));
console.log(originalString.trim());
console.log(originalString.charAt(6));
// must know Object
// static
// entries, keys, values

const obj1 = {
  name: "Jovan",
};

//const
class testObject {
  prop1;
  prop2;
  constructor(input1, input2) {
    this.prop1 = input1;
    this.prop2 = input2;
  }

  getProp1() {
    return this.prop1;
  }
}

const testing = new testObject("hahaha", "this is a test");

console.log("prop1 of testing obj", testing.getProp1());
