// Number Methods
// An intege is a whole number
const myNumber = 42;

// A number with a decimal point is a float which refereces a floating point number
const myFloat  = 42.09;
const myString = "42.123";
console.log(myNumber==myFloat)
console.log(myNumber==myString);
console.log(myString +3);

// The Number() method converts a string to a number
console.log(Number(myString));
console.log(Number(myString) + 3);
console.log(Number(myString)=== myNumber);

console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));

// the Number.isInteger() method determines whether the passed value is an integer
console.log(Number.isInteger(myNumber));

// The Number.parseFloat() method parses a string argument and returns a floating point number.
//if a number cannot be parsed, it returns NaN
console.log(Number.parseFloat(myFloat)); 
//it removes any trailing characters that are not part of the number
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myNumber));


//The toFixed() method formats a number according to the number of decimal points you provide as an argument
console.log(myFloat.toFixed(3));

// The parseInt() method parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
console.log(Number.parseInt(myFloat));
 
// The toString() method returns a string representing the specified Number object.
console.log(myNumber.toString());
console.log(myFloat.toString());
console.log(typeof myFloat.toString());
console.log(typeof Number.parseFloat(myString));

//chaining = using multiple methods on a single line of code
console.log(Number.parseFloat("4.567abc").toFixed(2).toString());

//NaN is an acronym for Not a Number.
console.log(Number("RK"));
//The Number.isNaN() method determines whether the passed value is NaN and its type is Number.
console.log(Number.isNaN("RK"));
//global isNaN() function determines whether a value is NaN or not. It returns true if the value is NaN; otherwise, it returns false.
console.log(isNaN("RK"));