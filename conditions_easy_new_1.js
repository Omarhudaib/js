
// 1- Write a program to declare two numbers. If both numbers are greater than 10, 
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".
/*
var x;
var y;
var x = parseInt(prompt("Enter a number for x:"));
var y = parseInt(prompt("Enter a number for y:"));
if((x+y)>10){
    console.log("Both numbers are greater than 10")}
    else{console.log("At least one number is not greater than 10")}
*/

// 2- Write a program to declare a username and a password. 
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".
/*
let name="omar";
let password="omar@";
if(name=="omar" &&password=="omar@"){console.log("Access granted")}
else{console.log("Access denied")}

*/
// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".
/*
var x = parseInt(prompt("Enter a number for x:"));
if(x>=10 && x>=20){
    console.log("The number is between 10 and 20")}

*/
// 4- Write a program that to declare age and whether they have a driver's license (yes or no). 
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".
/*
var age = parseInt(prompt("Enter age"));
if(age>=18 ){
    console.log("You can drive")}
else {
        console.log("You cannot drive")}
*/
// 5- Write a program to declare a number. 
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".

/*
var xnum;

var xnum = parseInt(prompt("Enter a number for x:"));

if(xnum>10||xnum<0){
    console.log("Invalid number")}
    else{console.log("Valid number")}
    */
// 6- Write a programto declare a number. 
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid". 
//Otherwise, print "The number is not valid".

/*
var ynum;

var ynum = parseInt(prompt("Enter a number for y:"));

if(ynum>=5&&ynum<=10||ynum<25&&ynum>20){
    console.log("Invalid number")}
    else{console.log("Valid number")}
*/
// 7- to declare a password. If the password is "secret" or "password", print "Access granted". 
//Otherwise, print "Access denied".


/*
var pa;

var pa = prompt("Enter a pass:");

if(pa=="secret"||pa=="password"){
    console.log("Access granted")}
    else{console.log("Access denied")}
    */
// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even, 
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".
/*
var znum;

var znum = parseInt(prompt("Enter a number :"));

if((znum>=0||znum<=100)&&(znum % 2 == 0)){
    console.log("The number is even and between 0 and 100")}
    else{console.log("The number is not even and/or not between 0 and 100")}

*/
// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative". 
//Otherwise, print "Both numbers are positive".
/*
var o;
var p;
var o = parseInt(prompt("Enter a number for :"));
var p = parseInt(prompt("Enter a number for :"));
if(o<0||p<0){
    console.log("At least one number is negative")}
    else{console.log("Both numbers are positive")}
    */

// 10- Write a program to declare age and whether they are a student (yes or no). 
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".
/*
var yn = prompt("are you a student (yes or no)");
var age = prompt("Enter age");
if(age > 18 || yn === "yes"){
    console.log("You qualify for a discount")}
else {console.log("You do not qualify for a discount")}
*/
