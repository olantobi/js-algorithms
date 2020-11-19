
function getFirstRecurring(arr) {
    const map = new Map();
    const set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            return arr[i];
        }
        set.add(arr[i]);
    }
    return undefined;
}

const arr1 = [2, 3,4,3,5,1,5,1,3,2,4,5,6,2,6];

console.log(getFirstRecurring(arr1));