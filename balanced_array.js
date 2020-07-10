

function balancedSum(arr) {
    let leftSum = 0;
    let rightSum = arr.reduce((a, b) => a+b);    
    
    for (let i = 0; i < arr.length; i++) {        
        rightSum -= arr[i];         
        if (leftSum === rightSum) {
            return i;
        }      
        leftSum += arr[i];        
    }
  return 0;
}

let arr = [1, 2, 3, 2, 4, 6];

console.log(balancedSum(arr));

