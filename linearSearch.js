// linear Search

let arr3 = [5, 8, 6, 9, 1, 4, 3,88];

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] === 3) {
   console.log(`index of element basic methord 1 ${i}`);
  //  console.log(i);
  }
}
for (let element of arr3) {
  if (element === 88) {
   console.log(`index of element basic methord 2 ${element}`);
  //  console.log(element);
  }
}


// *********************************************//
// linearSearch get index of target if not find target its return -1 & if array length is 0 its also return -1
// *********************************************//


let arr = [5, 8, 6, 9, 1, 4, 3,61];
let target = 4;
// let target = 455;

function linearSearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  // run a for loop
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element === target){
      // return i;
      return `index of element advance methord 1 ${i}`;
    }
  }
  return -1
}

let ans = linearSearch(arr, target)
console.log(ans)






// *********************************************//
// linearSearch using enhanced for loop to get element of target if not find target its return -1 & if array length is 0 its also return -1
// *********************************************//


let arr2 = [5, 8, 6, 9, 1, 4, 3,61];
let target2 = 61;
// let target2 = 661;

function linearSearch2(arr2, target2) {

  // if array length is 0 its return -1
  if (arr2.length === 0) {
    return -1;
  }

  // run a for loop and check if element is found in target return element
  for (let element of arr2) {
    if (element === target2){
      // return element;
      return `index of element advance methord 2 ${element}`;
    }
  }
  return -1
}

let ans2 = linearSearch2(arr2, target2)
console.log(ans2)








// *********************************************//
// linearSearch using enhanced for loop to get true if target find if not return false
// *********************************************//


let arr4 = [5, 8, 6, 9, 1, 4, 3,61];
let target4 = 61;
// let target4 = 691;

function linearSearch4(arr4, target4) {

  // if array length is 0 its return -1
  if (arr4.length === 0) {
    return false;
  }

  // run a for loop and check if element is found in target return element
  for (let element of arr4) {
    if (element === target4){
      return true;
    }
  }
  return false
}

let ans4 = linearSearch4(arr4, target4)
console.log(ans4)







// *********************************************//
// linearSearch in string
// *********************************************//


let str = "rishav";
let tar = "v";

function linearSearchInString(str, tar){
    if(str.length === 0){
      return false
    }

    for(let i = 0; i < str.length; i++){
      if(str.charAt(i) === tar){
        return `index of target ${i} element at the index of ${str.charAt(i)}`
      }
    }
    return false
}
  
let answer = linearSearchInString(str,tar)
console.log(answer)





// *********************************************//
// linearSearch in Range
// *********************************************//



let arr5 = [5, 8, 6, 9, 1, 4, 3,61];
let target5 = 6;
let range1 = 2;
let range2 = 6

function searchInRange(arr5, target5, range1, range2){
  if(arr5.length === 0){
    return false
  }

  for(let i=range1; i<range2; i++){
    if(arr5[i] === target5){
      return `index is ${i} and there element is ${arr5[i]}`
    }
  }
  return false
}

let ans5 = searchInRange(arr5, target5, range1, range2)
console.log(ans5)




// *********************************************//
// linearSearch in minimum number
// *********************************************//

let arr6 = [5, 8, 6, 9, 1, -4, 3,61];


function findMin(arr6){
  let minVal = arr6[0]
  for(let i=0; i<arr6.length; i++){
    if(minVal > arr6[i]){
      minVal = arr6[i]
    }
  }
  return minVal
}


console.log(findMin(arr6));




// *********************************************//
// linearSearch in maxmimum number
// *********************************************//

let arr7 = [5, 8, 6, 9, 1, -4, 3,61];


function findMax(arr7){
  let maxVal = arr7[0]
  for(let i=0; i<arr7.length; i++){
    if(maxVal < arr7[i]){
      maxVal = arr7[i]
    }
  }
  return maxVal
}



console.log(findMax(arr7));




// *********************************************//
// linearSearch in 2d array
// *********************************************//

// [true false true true true false]
// [true false true true true false]
// [true false true false true false]
// [true false true true true false]
// [true false false true true false]
// [false false true true true false]
// [true false true true true false]
// r c -> false or true


let matrix = [
  [1, 0, 1, 1, 1, 0],
  [1, 0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1, 0]

]
//[3 , 0 , 3 , 2 , 3 , 0]
function addcolumn(matrix , row , col){
  for(let i = 0; i<col; i++){
    let intSum = null;
    for(let j = 0; j<row; j++){
      intSum += matrix[j][i]

    }
    console.log(intSum)
  }
}

addcolumn(matrix, 3, 6)



