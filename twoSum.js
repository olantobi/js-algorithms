function twoSum(numArray, sum) {
    var pairs = [];
    var hashTable = [];

    for (var i=0; i<numArray.length; i++) {
        var currNum = numArray[i];
        var counterPart = sum - currNum;

        if (hashTable.indexOf(counterPart) !== -1) {
            pairs.push([currNum, counterPart]);
        }  
        
        hashTable.push(currNum);
    }

    return pairs;
}

let numArray = [1,6,4,5,3,3];
let pairs = twoSum(numArray, 7);

console.log("Array: ", numArray);
console.log("Pairs: ", pairs);