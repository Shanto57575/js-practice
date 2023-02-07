function secondLargest(arr){
   return arr.sort(function(a,b){return b-a});
}

console.log(secondLargest([10,33,6,7,3]));