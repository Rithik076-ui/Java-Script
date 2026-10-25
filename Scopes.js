// Scopes
// var,let,const
 var x=1;
 var x=2;
 console.log(x)

 let x=1;
  x=2;
 console.log(x)

 const x=1;
 x=2;
 console.log(x) 

// Global scope
var x=1;
let y=2;
const z=3;

// local scope

// local scope
function myfunc(){ //functional scope
    const z=5;
console.log(y);
{
    const y=4;
    console.log(y)
}
}
myfunc();

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