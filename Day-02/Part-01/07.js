/*
7.Write a function called isTriangle that takes 
three numbers as parameters representing the sides 
of a triangle, and returns true if the sides can 
form a valid triangle, and false otherwise. A valid
triangle has the property that the sum of the 
lengths of any two sides is greater than the 
length of the third side.
*/

function isTriangle(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}
console.log(isTriangle(3, 4, 5));  // true (classic right triangle)
console.log(isTriangle(1, 1, 2));  // false (1 + 1 is NOT greater than 2)
console.log(isTriangle(5, 7, 10)); // true
console.log(isTriangle(1, 10, 12)); // false
