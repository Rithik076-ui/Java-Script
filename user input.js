// User Input

alert("welcome");
let myboolean=confirm("ok=== true\ncancel ===False");
console.log(myboolean);

// nullis colesikin operator used
let name =prompt("please enter your name");
if (name.lenght){
console.log(name ?? "you didn't enter your name");
}
else{
    console.log("you didn't enter your name");
}


let name1 =prompt("please enter your name");
if (name1){
    console.log(name.length); //lenght we can check the length
    console.log(name.trim().length); // trim were used to delete the white space
    console.log(name.trim());
}
else{
    console.log("you didn't enter your name");
}