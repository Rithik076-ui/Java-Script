// Switch Statement

// syntax
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

 }