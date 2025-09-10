/*
3.Write a function called isPalindrome that takes 
a string as a parameter and returns true if the 
string is a palindrome (reads the same forwards 
and backwards), and false otherwise.
*/

// ✅ Global variable
//let str = "Racecar";
let str='Madam'

// ✅ Function to check palindrome
function isPalindrome(globstr) {
    return globstr.toLowerCase() === globstr.toLowerCase().split("").reverse().join("");
}

// ✅ Use the global variable
if (isPalindrome(str)) {
    console.log(`${str} is a palindrome`);
} else {
    console.log(`${str} is not a palindrome...`);
}
