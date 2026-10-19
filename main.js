console.log("hello world");
console.log(typeof "Dave");
console.log(typeof 42);
console.log(typeof true);

// =========================================************************============================

// //String Methods
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

// ==================================*************************==========================

// // Number Methods
// // An integer is a whole number
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

// =================================**********************=========================

// //Math methods and properties
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

// //from 1 to 10
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

// ==================================*******************=============================

// conditional statements

// synatax

// if(condition){
//     //code to run if condition is true
// }else{
//     //code to run if condition is false
// }

let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = "true";
let reply;
if (customerIsBanned){
    reply = "sorry, you are banned";
} else if (soup&&crackers){
    reply = `yes, we have ${soup} & crackers`;
} else if (soup){
    reply = `yes, we have ${soup}`;
} else {
    reply = "sorry, we are out of soup";
}
console.log(reply);


let testscore = 100;
let collegestudent = true;
let grade;
if (testscore >= 90){
    grade = "O";
}
else if (testscore >= 90){
    grade = "A";
}
    else if (testscore >= 80){
        grade = "B";
}else if (testscore >= 70){
    grade = "C";
} else if (testscore >= 60){
    grade = "D";
} else 
    if (collegestudent){
        grade = "U";

    }else {
        grade = "F";
    }
console.log(grade);


// // Decision Tree

 if (playerone===computer){
// tie
}else if (playerone==="rock"){
    if (computer==="paper"){
        // computer wins
    }else {
// player one wins
    }
}else if (playerone==="paper"){
    if (computer==="scissors"){
        // computer wins
    }else {
// player one wins
    }
}  else{
    if (computer==="rock"){
        // computer wins
    } else {
        // player one wins
    }
}

// ============================************========================
// Switch Statement

syntax
switch (expression or value) {
    case choice1:
        // code to run if expression === choice1
        break;
    case choice2:
        // code to run if expression === choice2
        break;

    default:
        // code to run if expression doesn't match any case
        // run this code if no cases match the expression

        // Switch Statement


switch (Math.floor(Math.random() * 5 + 1)) {
    
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("No match");

// }

// ============================================*****************************====================================== 

// ternary operator
// syntax
// condition ? expressionIfTrue : expressionIfFalse;

let soup = "chicken noodle soup";
let iscustomerBanned = true;
let soupAccess = iscustomerBanned 
? "sorry, you are banned" : soup 
? `yes, we have ${soup}` 
: "sorry, we are out of soup";
console.log(soupAccess);

let testscore=100;
let mygrade=
testscore >90 ? "O"
:testscore >79 ? "B"
:testscore >69 ? "c"
:testscore >59 ? "D"
:"F";
console.log(`my test grade is a ${mygrade}.`);

// =============================**************************========================

// User Input

