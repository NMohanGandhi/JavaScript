/*
3.Write a function that takes an array of objects and 
a property string as parameters, and returns the sum 
of all the values of that property in the objects.
*/

function sumPropertyValues(arr, property) {
  let sum = 0;

  for (let obj of arr) {
    if (obj.hasOwnProperty(property) && typeof obj[property] === 'number') {
      sum += obj[property];
    }
  }

  return sum;
}
const data = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 28 },
  { name: 'Daisy' } // No 'age' property
];

const totalAge = sumPropertyValues(data, 'age');
console.log(totalAge); // Output: 83
