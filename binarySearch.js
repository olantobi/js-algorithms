function binarySearch(sortedArray, num) {

  var start = 0;  
  end = sortedArray.length -1;
  let iterCount = 0;
  var element;
  var mid;

  while (start <= end) {    
    mid = Math.floor((end + start) / 2);
    element = sortedArray[mid];

    if (element == num) {
      return mid;
    } else if (element > num) {
      end = mid - 1;      
    } else if (element < num) {
      start = mid + 1;        
    }    
  }
  
  return -1;
}

let sortedArray = [1, 2, 5, 8, 9, 11, 12, 13, 13, 14, 15];
let searchValue = 13;

let pos = binarySearch(sortedArray, searchValue);

console.log("Position: "+pos);