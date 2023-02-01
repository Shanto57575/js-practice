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