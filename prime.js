//Check if a anumber is prime or not
function isPrime(num){
   if(num==0 || num==1)return "Not a prime number";
   for(let i=2; i<Math.sqrt(num); i++)
   {
      if(num%i==0)return "Not a prime number";
   }
   return "Its a prime number";
}
console.log(isPrime(29));