/*
8.Declare a variable called myNull and assign 
it a value of null. Use the typeof operator to 
verify that myNull is a null value.
*/

/*
let mynull=null;
console.log(typeof(mynull))
*/

let mynull = null;

console.log(mynull === null);        // true ✅
console.log(typeof mynull);          // "object" ❗ (quirk)
