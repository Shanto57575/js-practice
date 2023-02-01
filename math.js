//use of power function

let power = Math.pow(2,5);
console.log(power);

//use of abs function

let age1 = 35;
let age2 = 55;
let gap = age1-age2; // -20
gap = Math.abs(age1-age2);
if(gap>10){
    console.log("Age difference is too much");
}
else{
    console.log("Age difference is Okay!");
}

//round function

const rnd = 3.1416;
const new_rnd = Math.round(rnd);
console.log(new_rnd);//if less than 3.5 will give 3 else 4

//ceil function

const chill = 1.49;
const new_chill = Math.ceil(chill);
console.log(new_chill);//will always return the above int

//floor function

const floor = 2.99999999;
const new_floor = Math.floor(floor);
console.log(new_floor);//will always return the below int
// random function

const random = Math.random(); // will throw a random value
const random1 = Math.random()*100; // will throw a random value form 1 to 100
console.log(random);
console.log(random1);

// Max & Min function

const one = 70;
const two = 80;
const three = 90;

console.log(Math.max(one,two,three));
console.log(Math.min(one,two,three));


/*

       ----------------------------------------------------------------

*/