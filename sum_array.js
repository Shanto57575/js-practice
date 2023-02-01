// problem :write a function to print the sum of all array elements

function sum_array(add){
   let s = 0;
   for(let i=0; i<add.length; i++)
   {
     s += add[i];
   }
   return s;
}

let sum = [10,20,30,40,50,88,67];
console.log(sum_array(sum));