function fact(n) {
    if (n > 1) return n * fact(n - 1);
    return 1;
}
console.log(fact(5));

/*

   n = 5;
   5>1 so, return 5 * fact(4); 5*4*3*2*1 = 120
   4>1 so, return 4 * fact(3); 4*3*2*1 = 24
   3>1 so, return 3 * fact(2); 3*2*1 = 6
   2>1 so, return 2 * fact(1); 2*1 = 2
   n=1 so, return 1;

*/
