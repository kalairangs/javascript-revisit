function range(start, end, diff) {
    let arr = [];
  	let range = diff === undefined ? 1 : diff;
  	if ( end > start) {
      for (let i=start-1; i<end; i++) {
         arr.push(i + range);
      }
    }
  	else {
  	  for (let i=start+1; i > end; i--) {
         arr.push(i + range);
      }
  	}
    return arr;
}

function sum(arr) {
    let total = 0;
    for (let i of arr) {
        total += i;
    }
    return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55