let arr1 = [1,2,4,4];
let arr2 = [1,2,3,9];
let arr3 = [2,7,11,15];
let sum = 9;

function getSumValues(arr, sum) {
    const map = new Map();

    for (let i=0; i<arr.length; i++) {
        let comp = sum - arr[i];
        if (map.has(comp)) {
            return [map.get(comp), i];
        }
        map.set(arr[i], i);
    }
    return [];
}

// let compTable = {
//     '7': 0
// }

// if (compTable.hasOwnProperty(7)) {
//     console.log("I have a 7");
// } else {
//     console.log("No, i don't have 7");
// }
console.log(getSumValues(arr3, sum));