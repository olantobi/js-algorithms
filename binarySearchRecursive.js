function binarySearch(sortedArray, key) {

    return binarySearchRecursive(key, sortedArray, 0, sortedArray.length-1);
  }

  function binarySearchRecursive(search, array, start, end){

    var middle = Math.floor((start + end)/2);

    if(end < start){
      return -1;
    }

    if (search == array[middle]){
      return middle;
    } else  if (search < array[middle]){
      return binarySearchRecursive(search, array, start, middle - 1);
    } else if (search > array[middle]){
      return binarySearchRecursive(search, array, middle + 1, end);
    }

    return -1;
  }

  function binarySearchRec(sortedArray, low, high, key) {

    let midIndex = Math.floor((low + high)/2);
    let midElement = sortedArray[midIndex];

    if (high < low)
        return -1;

    if (midElement == key)
        return midIndex;
    else if (midElement < key) {
        return binarySearchRec(sortedArray, midIndex+1, high, key);
    } else if (midElement > key) {
        return binarySearchRec(sortedArray, low, midIndex-1, key);
    }

    return -1;
  }
  
  let searchValue = 18;
  let sortedArray = [1, 2, 5, 8, 9, 11, 12, 13, 14, 15, 17, 18, 20, 21, 25, 28];
  let low = 0;
  let high = sortedArray.length-1;

  console.log("Array: ", sortedArray);

  let pos = binarySearchRec(sortedArray, low, high, searchValue);
//   let pos = binarySearch(sortedArray,  searchValue);
  
  console.log("Position: "+pos);