const arr1 = [22, 323, 44];
const arr2 = [12, 14, 24];

let finalArr = [];

finalArr = finalArr.concat(100);
finalArr = finalArr.concat(1, 3, 4);
finalArr = finalArr.concat(arr1);
finalArr = finalArr.concat(arr2);

console.log(finalArr);