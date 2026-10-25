// OBJECTS
// key value pairs in curly braces

const myobj={name:"Rihtik"};

const anotherobj ={
    alive: true, 
    answer:42,
    hobbies:["eat","sleep","code"],
    beverage:{  // nested obj
        morning: "coffee",
        afternoon: "cold tea"
    },
     action: function(){
        return `time for ${this.beverage.morning}`; // this referes to the object
     }
};
// console.log(anotherobj.alive);// . method for access the value by a key

console.log(anotherobj['beverage']);// [] method access the value by key, // it shows entire nested obj

console.log(anotherobj.beverage.morning);
console.log(anotherobj.action());


const vehicle ={
    wheels:4,
    eng: function () {
        return "get ready";
    }
};

const truck = Object.create(vehicle); // act as a consructor
truck.doors=2;
console.log(truck);
console.log(truck.wheels); // inheritance
console.log(truck.eng());

const car= Object.create(vehicle);
car.doors=4;
car.engine=function(){
    return "vroom";
};
console.log(car.engine());
console.log(car.wheels);

const bmw=Object.create(car);
console.log(bmw.wheels);
console.log(bmw.eng());
bmw.eng=function(){
    return "whooooh";
};
console.log(bmw.eng())

const market={
    fruits:"orange",
    vegetables:"carrot",
    meat:"mutton",
    leaves:"curryleaves"
    
};
delete market.leaves; // delete the key pair values
console.log(market.hasOwnProperty("leaves")); // it checks whether value is available or not

console.log(Object.keys(market));
console.log(Object.values(market));

for(let items in market ){ // for in loop executed
    // console.log(market[items]);// it can gives the market values line by line
console.log(`on ${items},it's ${market[items]}!`) // it shows the key and values in same line
}

// destructing objects
 
const{leaves:useful,meat:tasty}=market;
console.log(useful);
console.log(tasty);

const{fruits,vegetables,meat,mutton}=market;
console.log(fruits);
console.log(vegetables);

function food({fruits}){
    return`${fruits} sweet`};
    console.log(food(market));