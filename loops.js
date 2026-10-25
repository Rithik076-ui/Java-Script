// LOOPS

// while loop
let mynumber=0;
while(mynumber<50){
    mynumber+=2; //post increment ++
    console.log(mynumber);
}
// Dont create endless loop

// do while loop

let mynumbers=50;
while(mynumbers<50){
    mynumbers+=2; //post increment ++
    console.log(mynumbers);
}
do{
    console.log(mynumbers);
} while (mynumbers<50);

// For Loop

for(let i = 1; i<=10;){
    console.log(i);
    i++;
}

let i = 1;
 for(;i<=10;){
    console.log(i);
    i++;
 }

 for(let i = 1;i<=10;  i++){
    console.log(i);
 }
// Examples

let name="Rithik";
for(let i=0; i<= name.length; i++){
    console.log(name.charAt(i));
}

// loop breaking and continue

let myname0="Rithik"
let counter =0;
let myletter;
while (true){
    myletter= myname0[counter];
    console.log(myletter);
    if(myletter==="h")
        break;
    counter++;
}

let myname1="Rithik"
let counter1 =0;
let mylette1;
while (counter1<=3){
    myletter2= myname1[counter1];
    console.log(myletter1);
    if(counter1===1){
        counter1+=2
        continue;
    }
    if(myletter1==="h")
        break;
    counter++;
}
console.log(counter);