/*
5.Write a function called isPrime that takes a 
number as a parameter and returns true if the 
number is prime (only divisible by 1 and itself), 
and false otherwise.
*/

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // Found a divisor → not prime
        }
    }

    return true; // No divisors found → prime
}
let num = 11;

if (isPrime(num)) {
    console.log(`${num} is a prime number`);
} else {
    console.log(`${num} is not a prime number`);
}
