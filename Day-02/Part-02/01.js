/*
1.Write a function called isVowel that takes a 
character as a parameter and returns true if the 
character is a vowel (a, e, i, o, u), and false 
otherwise.
*/
function isVowel(charr) {
    return ['a', 'e', 'i', 'o', 'u',
        'A','E','I','O','U'].includes(charr)//includes(charr.toLowerCase());
}

function checkCharacter(charr) {
    if (isVowel(charr)) {
        console.log(`${charr} is a vowel`);
    } else {
        console.log(`${charr} is not a vowel`);
    }
}

checkCharacter('a');  // Output: a is a vowel
checkCharacter('B');  // Output: B is not a vowel
checkCharacter('O');  // Output: O is a vowel

