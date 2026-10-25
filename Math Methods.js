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

// write code that willa return a random letter from your name
console.log("rithik".charAt(0));
//write code that will return a random number between 1 and 4
console.log(Math.floor(Math.random() * 4) + 1);

// challenge
const anyname = "rithik";
console.log(anyname.charAt(Math.floor(Math.random() * anyname.length)));
console.log(anyname.charAt(Math.floor(Math.random() * anyname.length)));
console.log(anyname.charAt(Math.floor(Math.random() * anyname.length)));
console.log(anyname.charAt(Math.floor(Math.random() * anyname.length)));
