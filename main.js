// console.log("hello world");
// console.log(typeof "Dave");
// console.log(typeof 42);
// console.log(typeof true);

// // ============================================*****************************====================================== 

// // //String Methods
// const myvariable = "HelloWorld";
// //length property
// console.log(myvariable.length);
// console.log("myvariable".length);
// // charvarAt() method
// console.log(myvariable.charAt(1));
// // indexOf() method
// console.log(myvariable.indexOf("l"));
// //lastIndexOf() method
// console.log(myvariable.lastIndexOf("l"));
// // slice() method
// console.log(myvariable.slice(5, 6)); //No output because the starting parameter is greater than the ending parameter
// // toUpperCase() method
// console.log(myvariable.toUpperCase());
// // toLowerCase() method
// console.log(myvariable.toLowerCase());
// // includes() method
// console.log(myvariable.includes("Hello"));
// // split() method
// console.log(myvariable.split(""));
// console.log("rk,sk,tk".split(","));
// console.log(" everthing is fine".split(","));

// // ============================================*****************************====================================== 

// // // Number Methods
// // // An intege is a whole number
// const myNumber = 42;

// // A number with a decimal point is a float which refereces a floating point number
// const myFloat  = 42.09;
// const myString = "42.123";
// console.log(myNumber==myFloat)
// console.log(myNumber==myString);
// console.log(myString +3);

// // The Number() method converts a string to a number
// console.log(Number(myString));
// console.log(Number(myString) + 3);
// console.log(Number(myString)=== myNumber);

// console.log(Number(undefined));
// console.log(Number(true));
// console.log(Number(false));

// // the Number.isInteger() method determines whether the passed value is an integer
// console.log(Number.isInteger(myNumber));

// // The Number.parseFloat() method parses a string argument and returns a floating point number.
// //if a number cannot be parsed, it returns NaN
// console.log(Number.parseFloat(myFloat)); 
// //it removes any trailing characters that are not part of the number
// console.log(Number.parseFloat(myString));
// console.log(Number.parseFloat(myNumber));


// //The toFixed() method formats a number according to the number of decimal points you provide as an argument
// console.log(myFloat.toFixed(3));

// // The parseInt() method parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
// console.log(Number.parseInt(myFloat));
 
// // The toString() method returns a string representing the specified Number object.
// console.log(myNumber.toString());
// console.log(myFloat.toString());
// console.log(typeof myFloat.toString());
// console.log(typeof Number.parseFloat(myString));

// //chaining = using multiple methods on a single line of code
// console.log(Number.parseFloat("4.567abc").toFixed(2).toString());

// //NaN is an acronym for Not a Number.
// console.log(Number("RK"));
// //The Number.isNaN() method determines whether the passed value is NaN and its type is Number.
// console.log(Number.isNaN("RK"));
// //global isNaN() function determines whether a value is NaN or not. It returns true if the value is NaN; otherwise, it returns false.
// console.log(isNaN("RK"));

// // ============================================*****************************====================================== 

// //Math methods and properties
// console.log(Math.PI);
// //trunk method returns the integer part of a number by removing any fractional digits.
// console.log(Math.trunc(90));
// console.log(Math.round(65.5));
// console.log(Math.floor(90.9));
// console.log(Math.ceil(80.6));
// //th pow() method returns the base to the exponent power, that is, base^exponent.
// console.log(Math.pow(2, 10));
// console.log(Math.min(2,-1,9));
// console.log(Math.max(2,-1,9.1));

// //math.random() method returns a floating-point, pseudo-random number in the range 0–1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range.
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// //from 1 to 10
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);  

// // write code that willa return a random letter from your name
// console.log("rithik".charAt(0));
// //write code that will return a random number between 1 and 4
// console.log(Math.floor(Math.random() * 4) + 1);

// // challenge
// const anyname = "rithik";
// console.log(anyname.charAt(Math.floor(Math.random() * anyname.length)));
// console.log(anyname.charAt(Math.floor(Math.random() * anyname.length)));
// console.log(anyname.charAt(Math.floor(Math.random() * anyname.length)));
// console.log(anyname.charAt(Math.floor(Math.random() * anyname.length)));

// // ============================================*****************************====================================== 

// // conditional statements

// // synatax

// // if(condition){
// //     //code to run if condition is true
// // }else{
// //     //code to run if condition is false
// // }

// let customerIsBanned = false;
// let soup = "chicken noodle soup";
// let crackers = "true";
// let reply;
// if (customerIsBanned){
//     reply = "sorry, you are banned";
// } else if (soup&&crackers){
//     reply = `yes, we have ${soup} & crackers`;
// } else if (soup){
//     reply = `yes, we have ${soup}`;
// } else {
//     reply = "sorry, we are out of soup";
// }
// console.log(reply);


// let testscore = 100;
// let collegestudent = true;
// let grade;
// if (testscore >= 90){
//     grade = "O";
// }
// else if (testscore >= 90){
//     grade = "A";
// }
//     else if (testscore >= 80){
//         grade = "B";
// }else if (testscore >= 70){
//     grade = "C";
// } else if (testscore >= 60){
//     grade = "D";
// } else 
//     if (collegestudent){
//         grade = "U";

//     }else {
//         grade = "F";
//     }
// console.log(grade);


// // // Decision Tree
//  if (playerone===computer){
// // tie
// }else if (playerone==="rock"){
//     if (computer==="paper"){
//         // computer wins
//     }else {
// // player one wins
//     }
// }else if (playerone==="paper"){
//     if (computer==="scissors"){
//         // computer wins
//     }else {
// // player one wins
//     }
// }  else{
//     if (computer==="rock"){
//         // computer wins
//     } else {
//         // player one wins
//     }
// }

// // ============================================*****************************====================================== 
// // Switch Statement

// // syntax
// switch (expression or value) {
//     case choice1:
//         // code to run if expression === choice1
//         break;
//     case choice2:
//         // code to run if expression === choice2
//         break;

//     default:
//         // code to run if expression doesn't match any case
//         // run this code if no cases match the expression
// }
//         // Switch Statement


// switch (Math.floor(Math.random() * 5 + 1)) {
    
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     case 3:
//         console.log(3);
//         break;
//     default:
//         console.log("No match");

// // }

// // ============================================*****************************====================================== 

// // ternary operator
// // syntax
// // condition ? expressionIfTrue : expressionIfFalse;

// let soup = "chicken noodle soup";
// let iscustomerBanned = true;
// let soupAccess = iscustomerBanned 
// ? "sorry, you are banned" : soup 
// ? `yes, we have ${soup}` 
// : "sorry, we are out of soup";
// console.log(soupAccess);

// let testscore=100;
// let mygrade=
// testscore >90 ? "O"
// :testscore >79 ? "B"
// :testscore >69 ? "c"
// :testscore >59 ? "D"
// :"F";
// console.log(`my test grade is a ${mygrade}.`);

// // ============================================*****************************====================================== 

// // User Input

// alert("welcome");
// let myboolean=confirm("ok=== true\ncancel ===False");
// console.log(myboolean);

// // nullis colesikin operator used
// let name =prompt("please enter your name");
// if (name.lenght){
// console.log(name ?? "you didn't enter your name");
// }
// else{
//     console.log("you didn't enter your name");
// }


// let name =prompt("please enter your name");
// if (name){
//     console.log(name.length); //lenght we can check the length
//     console.log(name.trim().length); // trim were used to delete the white space
//     console.log(name.trim());
// }
// else{
//     console.log("you didn't enter your name");
// }

// // ============================================*****************************======================================

// // LOOPS

// // while loop
// let mynumber=0;
// while(mynumber<50){
//     mynumber+=2; //post increment ++
//     console.log(mynumber);
// }
// // Dont create endless loop

// // do while loop

// let mynumber=50;
// while(mynumber<50){
//     mynumber+=2; //post increment ++
//     console.log(mynumber);
// }
// do{
//     console.log(mynumber);
// } while (mynumber<50);

// // For Loop

// for(let i = 1; i<=10;){
//     console.log(i);
//     i++;
// }

// let i = 1;
//  for(;i<=10;){
//     console.log(i);
//     i++;
//  }

//  for(let i = 1;i<=10;  i++){
//     console.log(i);
//  }
// // Examples

// let name="Rithik";
// for(let i=0; i<= name.length; i++){
//     console.log(name.charAt(i));
// }

// // loop breaking and continue

// let myname="Rithik"
// let counter =0;
// let myletter;
// while (true){
//     myletter= myname[counter];
//     console.log(myletter);
//     if(myletter==="h")
//         break;
//     counter++;
// }

// let myname="Rithik"
// let counter =0;
// let myletter;
// while (counter<=3){
//     myletter= myname[counter];
//     console.log(myletter);
//     if(counter===1){
//         counter+=2
//         continue;
//     }
//     if(myletter==="h")
//         break;
//     counter++;
// }
// console.log(counter);

// // ============================================*****************************======================================
// Functions

// methods to buit in function

// "rithik".toLowerCase();
// Math.random();

// // functions declaratio syntax

// function sum(){
//     return 2+2;
// }
// console.log(sum());

// function sum(num1,num2){
//     return num1+num2;
// }
// console.log(sum(12,8));

// function sum(num1,num2){
//     console.log(num1); //call the paramter num 1 
//     console.log(num2); // call the parameter num 2
//     return num1+num2;
// }
// console.log(sum(2,4));

// function sum(num1,num2){
//     if(num2 === undefined){
//         return num1+num1;
//     }
//     return num1+num2;
// }
// console.log(sum(10));

// function getUserNameFromEmail(email){
//     return email.slice(0,email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("rithikstar076@gmail.com"))

// const getUserNameFromEmail=function(email){
//     return email.slice(0,email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("rithikstar076@gmail.com"))

// // Arrow Function

// const getUserNameFromEmail=(email)=>{
//     return email.slice(0,email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("coc@gmail.com"))

// const toProperCase=(name)=>{
//     return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
// };
// console.log(toProperCase("rItHiK"))
// ============================================*****************************======================================

// var,let,const
//  var x=1;
//  var x=2;
//  console.log(x)

//  let x=1;
//   x=2;
//  console.log(x)

//  const x=1;
//  x=2;
//  console.log(x) 

// // Global scope
// var x=1;
// let y=2;
// const z=3;

// // local scope

// // local scope
// function myfunc(){ //functional scope
//     const z=5;
// console.log(y);
// {
//     const y=4;
//     console.log(y)
// }
// }
// myfunc();

// // global scope
// var x=1; //function scoped
// let y=2; // block scoped
// const z=3;
 
// console.log(`global:${x}`);
// console.log(`global:${y}`);
// console.log(`global:${z}`);

// function myfunc(){
//     var x=10;
//     const z=5;
// {
//     var x=5; // function scopped
//     const z=6;// block scoped
// console.log(`block:${x}`);
// console.log(`block:${y}`);
// console.log(`block:${z}`);

// }
// console.log(`function:${x}`);
// console.log(`function:${y}`);
// console.log(`function:${z}`);
// }
// myfunc();


// ARRAYS


const myarray=[]; //In array we cab reeassign the value

// add element to array
myarray[0]="rk"
myarray[1]=1001;
myarray[2]=false;

// refer to an arary
console.log(myarray);

// length property
console.log(myarray.length);

//last element in a array
console.log(myarray[myarray.length-1]);

console.log(myarray[1]);

myarray.push("school"); //add a item into array
console.log(myarray);

const last=myarray.pop(); // remove the last item
console.log(last); //print the pop item

myarray.unshift(7);// add items in beginning of array
console.log(myarray);

const rat=myarray.push(7);
console.log(rat);

const rat=myarray.shift(); //removing an item in the front of array
console.log(rat);
console.log(myarray);
console.log(myarray[1]);
console.log(myarray[2]);


delete myarray[1]; //removing any item in array
console.log(myarray);// it shows empty
console.log(myarray[1])

myarray.splice(1,1,"RIthik");// it takes index (1,1) it delates how many want to delete
                            // (rithik)replace the element
console.log(myarray);
console.log(myarray[0]);

const array1=["a","b","c","d","e","f"];

// slice method
const array2=array1.slice(2,5);//it(2,5)first para takes the beggining of the array to remove
                                  //last para shows the slice by the index from end
console.log(array2)

// reverse method
array1.reverse(); //reverse the array
console.log(array1);

// join method
const rate1= array1.join(); // it put commas between them and created as string
console.log(rate1);

// split method.
const rate1= array1.join();
const dog1=rate1.split(","); // we can split the value of string
console.log(dog1);

concat method
const array2=["a","b","c"]
const array3=["d","e","f"];

const bird=array3.concat(array2);// it joints two existing array
console.log(bird);

// spread operator
const pain=[...array2,...array3] //when the spread removes we can see as new array it contain the length
console.log(pain);

Nested Arrays.

const team1=["baseball","cricket","football"];
const state=["france","india","columbia"];

const colour=["blue","orange","red"];
const dress=["jersey","tshirt","hoodie"];

console.log(team1[1]); // index 1 of array 
//or
console.log(colour[0]); //index 0 of the array

const statedep=[team1,state]
const dressdep=[dress,colour]

console.log(statedep[0][1]);
console.log(dressdep[1][0]);


const total=[statedep,dressdep];
console.log(total[0][0][1]);
console.log(total[1][1][0]);






















