let arr1 = [1,2,4,4];
let arr2 = [1,2,3,9];
let sum = 8;

function getSumValues(arr, sum) {
    let start = 0;
    let end = arr.length-1;

    while(start < end) {
        let testSum = arr[start] + arr[end];

        if (testSum == sum) {
            return [start, end];
        } else if (testSum < sum) {
            start++;        
        } else if (testSum > sum) {
            end--;
        }
    }

    return [];
}

console.log(getSumValues(arr2, sum));