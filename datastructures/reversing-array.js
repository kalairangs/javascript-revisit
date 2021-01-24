function reverseArray(arr) {
    let reverseArr = [];
  for (let i=arr.length; i >= 1; i--) {
      reverseArr.push(arr[i-1]);
  }
 return reverseArr;
}

function reverseArrayInPlace(arr) {
    return arr.reverse();
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]