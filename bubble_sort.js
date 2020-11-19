
function sort(arr) {
    // let lastUnsortedIndex = arr.length;
    // let temp = -1;

    for (var j=arr.length; j>0; j--) {
        for (var i=0; i<j; i++) {

            if (arr[i] > arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
            // for (let i=0; i<arr.length; i++) {

            // }
        }
        // lastUnsortedIndex--;
    }

    return arr;
}

let arr = [1,3, 4, 53, 2,4, 52, 5, 2,7 ,7,3,7,2,6,3,57,33]

console.log("Unsorted:");
console.log(arr);

arr = sort(arr);

console.log("Sorted:");
console.log(arr);


