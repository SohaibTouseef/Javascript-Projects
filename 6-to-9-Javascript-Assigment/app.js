// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// answer
let x = 10;
console.log("Result :");

console.log("The value of a is:",a);
console.log(".................");


console.log("The value is ++a :",++a)
console.log("Now the value of a is:",a);
console.log(".................");


console.log("The value is a++ :",a++);
console.log("Now the value of a is",a);
console.log(".................");


console.log("The value is --a :",--a);
console.log("Now the value of a is",a);
console.log(".................");

console.log("The value is a-- :",a--);
console.log("Now the value of a is",a);
console.log(".................");

// //What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// answer
var a = 2;
var b =1;
var result  = --a - --b + ++b + b--;

console.log("--a :",--a); // 2 -1 = 1
console.log("--a - --b :", --a - --b); // 2 - 1 = 1
console.log("--a - --b + ++b :",--a - --b + ++b); // 2-1 + 1 + 1 =2
console.log(" --a - --b + ++b + b-- :",--a - --b + ++b + b--); //2 - 1 + 1 + 1 +1 = 3
console.log("result is", --a - --b + ++b + b--);


// 3. Write a program that takes input a name from user &
// greet the user.
// answer
var userNmae = prompt("Enter Your Name");
console.log(userNmae);

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var num = prompt("Enter Your Number multiplication table :")
if(num%5===0){
    console.log("Number is  a multiplication table:",num);
    
}else{
    console.log("Number is a not multiplication table:",num);
    
}

// Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var  subjectName = "Subject Total Marks Obatine Marks percentage";
console.log(subjectName);

// Take
// a) Take three subjects name from user and store them in 3
// different variables.
var subject1 = "English"
let subject2 = "Math";
const subject3 = "Urdu";

// b) Total marks for each subject is 100, store it in another
// variable.
var marks1 = 100;
let marks2  = 100;
const marks3 = 100 ;

//  c) Take obtained marks for first subject from user and
// stored it in different variable.
var obtained_marks1 = 54;
let obtained_marks2 = 54;
const obtained_marks3 = 48;

//  Take obtained marks for remaining 2 subjects from user
//  and store them in variables.
var obtained_marks = 300;
var remaining_marks = 165;

// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

