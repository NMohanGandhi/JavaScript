/*
2.Create a variable myArray and assign it an array 
of numbers of your choice. Write a conditional 
statement that checks if the sum of the first and 
last elements of the array is greater than 10. 
If it is, log "The sum of the first and last 
elements is greater than 10" to the console. 
If it's not, log "The sum of the first and last 
elements is less than or equal to 10" to the 
console.
*/
let myarray=[5,4,5,3,2,3];
//console.log(myarray[0]);
//console.log(myarray[myarray.length-1]);
if ((myarray[0]+myarray[myarray.length-1])>10){
    console.log("The First and last elelmet of array is greater that 10");
}else{
    console.log("The first and last elelmt of array is lessthat 10")
}


