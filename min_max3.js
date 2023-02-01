// write a function to return maximum of 3 numbers
// Using  Max function
function maxi(a,b,c){
   return Math.max(a,b,c);
}
console.log(maxi(10,20,30));

// Using Min function
function mini(a,b,c){
    return Math.min(a,b,c);
}
console.log(mini(100,200,300));

// 

function maxi(a,b,c){
    if(a>b && a>c)return a;
    else if(b>a && b>c) return b;
    else return c;
 }

 console.log(maxi(99,20,30));
 
 // Using Min function
 function mini(a,b,c){
     return Math.min(a,b,c);
 }
 console.log(mini(55,66,79));

