const countChar = function(str, char){
   let count = 0;
  for (let i =0 ; i < str.length; i++){
    if(str[i] == char) count +=1;
  }
  return count;
}

const countBs = function(str){
 return countChar(str, "B")
}


console.log(countChar("kakkerlak", "k"));
console.log(countBs("BOB"));