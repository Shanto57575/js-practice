//Problem : write a function to reverse a string
function rev(str){

   let break_The_String = str.split("");
   let reverse_The_String = break_The_String.reverse();
   let add_the_char_together = reverse_The_String.join("");
   return add_the_char_together;
   /*
      One line code
      return str.split("").reverse().join("");
   */
}

let str = rev("Hello");
console.log(str);