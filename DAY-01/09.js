/*
9.Write a function called reverseString that 
takes a string as a parameter and returns the 
string in reverse order. For example, 
reverseString("hello") should return "olleh".
*/

function reversestring(str){
    return(
        str.split("").reverse().join("")
    )
}
let str="Home"
let reversed=(reversestring(str));
console.log(reversed);



