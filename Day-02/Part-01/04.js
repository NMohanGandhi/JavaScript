/*
4.Create an array called myArray with five elements 
of different data types. Write a conditional statement 
that checks if the third element in the array 
is a string. If it is, log "The third element 
is a string" to the console. If it's not, 
log "The third element is not a string" 
to the console.
*/

let myArray = [
    42,                      // Number
    "Hello, world!",         // String
    true,                    // Boolean
    { name: "Alice" },       // Object
    [1, 2, 3]                // Array
];

let element_no = 3; // This means third element (index 2)

if (typeof myArray[element_no - 1] === "string") {
    console.log(`${typeof myArray[element_no - 1]} — The third element is a string.`);
} else {
    console.log(`${typeof myArray[element_no - 1]} — The third element is NOT a string.`);
}
