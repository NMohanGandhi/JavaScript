/*
5.Write a function called isPositive that takes a 
number as a parameter and returns "positive" 
if the number is greater than 0, "negative" if the 
number is less than 0, and "zero" if the number 
is 0.
*/

function isPositive(num){
    if (num>0){
        console.log(`${num} is a positive`)
    }
    else{
        console.log(`${num} is a negative`)
    }
}
number = 1
isPositive(number)