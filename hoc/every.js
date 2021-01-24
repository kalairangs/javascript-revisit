function every(array, test){
    for (let element of array){
        if(test(element) === false){
            return false;
        }
    }
    return true;
}

console.log(every([1,3,5], n => n<=5))
// -> true
console.log(every([45,50,105], n => n>50))
// -> true
