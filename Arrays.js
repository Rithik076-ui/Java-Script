// ARRAYS

const myarray=[]; //In array we can reeassign the value

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

const rat0=myarray.shift(); //removing an item in the front of array
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
const rate2= array1.join();
const dog1=rate2.split(","); // we can split the value of string
console.log(dog1);

// concat method
const array3=["a","b","c"]
const array4=["d","e","f"];

const bird=array4.concat(array3);// it joints two existing array
console.log(bird);

// spread operator
const pain=[...array2,...array3] //when the spread removes we can see as new array it contain the length
console.log(pain);

// Nested Arrays.

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