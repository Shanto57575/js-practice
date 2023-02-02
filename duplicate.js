//Write a function to remove duplicate elements from array

// Approach 1 : 

function removeDuplicate(arr){
   let unique = [];
   for(let i=0; i<arr.length; i++)
   {
     if(unique.includes(arr[i])==false)
       unique.push(arr[i]);
   }
   return unique;
}

let arr = [10,20,30,10,40,30,50,20,10,50];
console.log(removeDuplicate(arr));

//  Approach 2 : 

function duplicateRemoval(array){
   let unq = [];
   for(let i=0; i<array.length; i++)
   {
     if(unq.indexOf(array[i])==-1) unq.push(array[i]);
   }
   return unq;
}

let array = [11,12,11,13,12,11,100,200,110,100];
console.log(duplicateRemoval(array));
