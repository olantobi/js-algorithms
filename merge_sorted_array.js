
function mergeSortedArray(array1, array2) {
    let arr1Len = array1.length;
    let arr2Len = array2.length;

    let finalArr = [];

    let arr1Index = 0;
    let arr2Index = 0;

    while (arr1Index < arr1Len || arr2Index < arr2Len) {
        if (arr2Index >= arr2Len || array1[arr1Index] <= array2[arr2Index]) {
            finalArr.push(array1[arr1Index]);
            arr1Index++;
        } else {
            finalArr.push(array2[arr2Index]);
            arr2Index++;
        }
    }

    // let arr1Item = array1[0];
    // let arr2Item = array2[0];

    // while (arr1Item || arr2Item) {
    //     if (!arr2Item || (arr1Item < arr2Item)) {
    //         finalArr.push(arr1Item);
    //         arr1Item = array1[arr1Index];
    //         arr1Index++;
    //     } else {
    //         finalArr.push(arr2Item);
    //         arr2Item = array2[arr2Index];
    //         arr2Index++;
    //     }
    // }

    return finalArr;
}


console.log(mergeSortedArray([0,0,3,4,31], [4,6,30, 32, 34]));

