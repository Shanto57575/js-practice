//Swapping two numbers program

// first Approach---------------------

let first_num = 100;
let sec_num = 200;

console.log("Before swapping : ", first_num,sec_num); 

let temp = first_num;//100

first_num = sec_num;//200
sec_num = temp;//100

console.log("After Swapping : ", first_num,sec_num);

// Second Approach

let f_num = 300;
let s_num = 500;
console.log("Before swapping : ", f_num, s_num);
f_num = f_num + s_num;// 300 + 500 = 800
s_num = f_num - s_num;// 800 - 500 = 300
f_num = f_num - s_num;// 380 - 300 = 500

console.log("After swapping : ", f_num, s_num);

// Third Approach:destructuring 

let first1  = 9999999999;
let second1 = 7777777777;

console.log("Before swapping : ",first1,second1);

[first1,second1] = [second1,first1];

console.log("After swapping : ", first1,second1);


/* ------------------------------------------- */