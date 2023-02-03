function bestFriend(array){
    
    let mxL = [];
    let maxLength = 1;
    for(let i=0; i<array.length; i++)
    {
      if(array[i].length>maxLength)
      {
        if(mxL.length>0)mxL.pop();
        mxL.push(array[i]);
      }
    }
    return mxL[0];
}
let arr = ["shakib","Rafayet","Sanoar","Afsar","alauddinkhilji"];
console.log(bestFriend(arr));