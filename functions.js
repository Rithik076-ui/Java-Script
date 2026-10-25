// Functions

// methods to buit in function

"rithik".toLowerCase();
Math.random();

// functions declaration syntax

function sum(){
    return 2+2;
}
console.log(sum());

function sum(num1,num2){
    return num1+num2;
}
console.log(sum(12,8));

function sum(num1,num2){
    console.log(num1); //call the paramter num 1 
    console.log(num2); // call the parameter num 2
    return num1+num2;
}
console.log(sum(2,4));

function sum(num1,num2){
    if(num2 === undefined){
        return num1+num1;
    }
    return num1+num2;
}
console.log(sum(10));

function getUserNameFromEmail(email){
    return email.slice(0,email.indexOf("@"));
}
console.log(getUserNameFromEmail("rithikstar076@gmail.com"))

const getUserNameFromEmail=function(email){
    return email.slice(0,email.indexOf("@"));
}
console.log(getUserNameFromEmail("rithikstar076@gmail.com"))

// Arrow Function

const getUserNameFromEmail=(email)=>{
    return email.slice(0,email.indexOf("@"));
}
console.log(getUserNameFromEmail("coc@gmail.com"))

const toProperCase=(name)=>{
    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
};
console.log(toProperCase("rItHiK"))