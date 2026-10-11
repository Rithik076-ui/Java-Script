console.log("hello world");
console.log(typeof "Dave");
console.log(typeof 42);
console.log(typeof true);

//String Methods
const myvariable = "HelloWorld";
//length property
console.log(myvariable.length);
console.log("myvariable".length);
// charvarAt() method
console.log(myvariable.charAt(1));
// indexOf() method
console.log(myvariable.indexOf("l"));
//lastIndexOf() method
console.log(myvariable.lastIndexOf("l"));
// slice() method
console.log(myvariable.slice(5, 6)); //No output because the starting parameter is greater than the ending parameter
// toUpperCase() method
console.log(myvariable.toUpperCase());
// toLowerCase() method
console.log(myvariable.toLowerCase());
// includes() method
console.log(myvariable.includes("Hello"));
// split() method
console.log(myvariable.split(""));
console.log("rk,sk,tk".split(","));
console.log(" everthing is fine".split(","));


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



//Math methods and properties
console.log(Math.PI);
//trunk method returns the integer part of a number by removing any fractional digits.
console.log(Math.trunc(90));
console.log(Math.round(65.5));
console.log(Math.floor(90.9));
console.log(Math.ceil(80.6));
//th pow() method returns the base to the exponent power, that is, base^exponent.
console.log(Math.pow(2, 10));
console.log(Math.min(2,-1,9));
console.log(Math.max(2,-1,9.1));

//math.random() method returns a floating-point, pseudo-random number in the range 0–1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range.
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);  


