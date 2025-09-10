/*
3.Write a function called isLeapYear that takes a 
year as a parameter and returns true if the year 
is a leap year, and false otherwise. A leap year 
is a year that is divisible by 4, but not by 100, 
or a year that is divisible by 400.
*/

function isLeapYear(year){
    return(
        (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
    )
}
year=2021
result = isLeapYear(year)
if (result==true){
    console.log(`${year} is a lear year`)
}
else{
    console.log(`${year} is not a leap year`)
}