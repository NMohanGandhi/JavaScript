/*
4.Create an object called myObject with two 
key-value pairs representing a person's first name 
and last name. Write a conditional statement that 
checks if the length of the person's first name 
is greater than the length of their last name. 
If it is, log "The first name is longer than the 
last name" to the console. If it's not, log 
"The last name is longer than or equal to the 
first name" to the console.
*/

let myObject={
    firstname:'gandhi',
    lastname:'mahaaniiiiii'
}
if(myObject.firstname.length>myObject.lastname.length){
  console.log("The first name is longer than the \
    last name")  
}
else{
    console.log("The first name is smaller than the last name")
}