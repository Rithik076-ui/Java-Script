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