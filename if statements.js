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
