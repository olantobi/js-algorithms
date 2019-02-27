function reverseArray(arr) {

    for (var i=0; i < arr.length/2; i++) {
        var tempVar = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = tempVar;
    }

    return arr;
}

let arr = [1,2,3,4,5,6,7];

console.log("Original", arr);

let revArr = reverseArray(arr);

console.log("Reversed", revArr);