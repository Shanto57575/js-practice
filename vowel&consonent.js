// problem: Detect whether the char is vowel or consonant 

function check_vowel_or_consonant(alpha){
   if(alpha=='a' || alpha=='e' || alpha=='i' || alpha=='o' || alpha=='u')
        return "Its a Vowel";
   return "Its a consonant";
}

let alpha = check_vowel_or_consonant("i");
console.log(alpha);