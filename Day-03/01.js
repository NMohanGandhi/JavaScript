/*
1.Write a function called reverseArray that takes 
an array as a parameter and returns a new array 
with the elements in reverse order.
*/

/*
function reverseArray(arr){
  return(arr.split("").reverse().join(""))
}
console.log(reverseArray("MADAMS"))
*/

function reverseArray(arr) {
  return arr.slice().reverse(); // Use slice() to avoid mutating the original array
}

// Example usage:
console.log(reverseArray([1, 2, 3, 4, 5])); 
// Output: [5, 4, 3, 2, 1]