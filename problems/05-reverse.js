/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

let reverse = string => {
  if(string.length <= 0 || string === "") {
    return "";
  } else {
    let strArr = string.split("");
    let lastLetter = strArr.pop();
    let newStr = strArr.join("");
    return lastLetter + reverse(newStr);
  }
}
// reverse("house"); // "esuoh"
// reverse("dog"); // "god"
// reverse("atom"); // "mota"
// reverse("q"); // "q"
//console.log(reverse("id")); // "di"
//reverse(""); // ""
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
