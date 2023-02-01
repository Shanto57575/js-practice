                          // Some string Methods

/*
                  To check if the specific word is present in the sentence?
                         we use string_name.includes()
*/

const str = "Its a lovely morning"
console.log(str.includes("lovely"))//true
console.log(str.includes("night"))//false

/*
                To check if the sentence is starts with specific word?
                       we use string_name.startsWith("search")
*/

console.log(str.startsWith("Its a"))//true
console.log(str.startsWith("morning"))//false

/*
                   To check if the sentence is end with specific word?
                       we use string_name.startsWith("search")
*/
console.log(str.endsWith("morning"))//true
console.log(str.endsWith("lovely"))//false

                    // breaking string in various way(split)

const str1 = "One day you will leave this world behind. So live a life you will remember";
let first= str1.split('');//break in char...no space
let second = str1.split('.')//break the sentence where it will find dot
let third = str1.split(' ')//giving space....break the sentence in word
console.log(first);
console.log(second);
console.log(third);

                     // string slice

let fourth = str1.slice(0,9);//output: starting index to ending index-1
console.log(fourth);

                     // string substring

let fifth = str1.substring(0,str1.length);//output: starting index to ending index-1
console.log(fifth);

                       // string concatenation:

const str2 = "One day you will leave this world behind";
const str3 = "So live a life you will remember";

const concat = str2+". "+str3;
console.log(concat);