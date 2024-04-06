let str = "rishav";
let tar = "v";
let ans = linearSearchInString(str, tar)


function linearSearchInString(str, tar){
    if(str.length === 0){
      return false
    }

    for(let i = 0; i < str.length; i++){
      if(tar === str.charAt(i)){
        return i
      }
    }
    return false
}
  
console.log(ans)

