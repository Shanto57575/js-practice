// fibonacci series
//***** Approach 1: 
let first = 0;
let second = 1;
let third = first + second;

console.log(first);//0
console.log(second);//1
console.log(third);//1
for(let i=0; i<10; i++)
{
  first = second;//1
  second = third;//1
  third = first + second;//2
  console.log(third);//2
}

//***** Approach 2: 

const fibonacci = [0,1];

for(let i=2; i<12; i++)
{
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

console.log(fibonacci);
console.log(fibonacci.length);

/**********------------------------------***********/