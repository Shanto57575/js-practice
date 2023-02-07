function sum(n){
   if(n!=0)return n+sum(n-1);
   return n;
}
console.log(sum(5));
/*

n = 5;
n!=0 so, return 5 + sum(4);
n!=0 so, return 4 + sum(3);
n!=0 so, return 3 + sum(2);
n!=0 so, return 2 + sum(1);
n!=0 so, return 1 + sum 0;
n==0 so, return 0;
*/

