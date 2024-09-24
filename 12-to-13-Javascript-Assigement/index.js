
//    Assignment 11 to 12





// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
//answer:


let input = prompt("enter your character uppercase ya lowercase"); 
let asciiCode = input.charCodeAt(0);

if (asciiCode >= 48 && asciiCode <= 57) {
    console.log("The input is a number.");
} else if (asciiCode >= 65 && asciiCode <= 90) {
    console.log("The input is an uppercase letter.");
} else if (asciiCode >= 97 && asciiCode <= 122) {
    console.log("The input is a lowercase letter.");
} else {
    console.log("The input is neither a number nor a letter.");
}




// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

//answer:

var num1 = prompt("enter your number")
var num2 = prompt("enter your number")
var num = parseInt(num1,num2)
if(num1 > num2){
alert(num1 + " is large " + num2)

}else if(num2 > num1){
    alert(num2 + " is large " + num1)
}else(
    alert(num1 + "  are equal number  " + num2)
)

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

answer:

var input1 = prompt("enter your number")
var num = parseInt(input1)
if(inpu1t > 0){
alert("its a positive number")
}else if(input1<0){
alert("its a negative number")
}else{
    alert(" not a number")
}

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise
//answer:




var input2 = prompt("enter your character")



if(input2 == "a" || input2 == "A"){
 console.log("true")
}else if (input2 == "e" || input2 == "E"){
    console.log("true")
}else if (input2 == "i"||inpu2t == "I"){
    console.log("true")
}else if (input2 == "o" || input2 == "O"){
    console.log("true")
}else if (input2 == "u" || input2 == "U"){
    console.log("true")
}else{
    alert("not vowel")
}


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


var correctPassword = "mysecretpassword";  
  

var userPassword = prompt("Enter your password: ");  
  

if (userPassword === "") {  
  alert("Please enter your password");  
} else if (userPassword === correctPassword) {  
  alert("Correct  password");  
} else {  
  alert("Incorrect password");  
}


// 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";

}else{
greeting = "Good evening";
}


var hour = 13;

 if (hour < 18) {
console.log("Good day");
 }else{
    console.log("Good evening ");
 }


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
//answer:

var time = 1900
var user_inp = +prompt("enter your TIME")
if(user_inp >0 && user_inp < 1200){
console.log("good morning")
}else if (user_inp >=1200 && user_inp < 1700){
    console.log("good afternoon")
}else if (user_inp >=1700 && user_inp < 2100){
    console.log("good evening")
}else if (user_inp >=2100 && user_inp <= 2359){
    console.log("good night")
}else{
    console.log("not time match")
}