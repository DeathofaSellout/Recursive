/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/
let addToTwelve = (arr) => {
  let answer = false;
  let firstInd = 0;
  let secondInd = 1;
  function final(arr) {

    if(secondInd === arr.length || arr.length < 1) {
      return answer;
    }

    if(arr[firstInd] + arr[secondInd] === 12){
      return true;
    }

    firstInd += 1;
    secondInd += 1;
    return final(arr);
  }

  return final(arr);
  //return answer;
}
// your code here

console.log(addToTwelve([1, 3, 4, 7, 5]));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
