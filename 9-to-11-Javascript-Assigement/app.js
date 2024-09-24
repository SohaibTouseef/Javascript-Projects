
////////assignment 9 to 11 ///////////


// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

//answer:

var City = ["karachi","lahore","islamabad","multan","quetta"]
var myCity = prompt("Enter your city")
var matchFound = false;
for (var i =0;i<=4;i++){
    if(myCity == City[i])
        {
        alert('Welcome your city')
        matchFound = true

    }

}

if(matchFound){

}else {

    alert("not your city")
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

//answer:
var gender = ["male","female"]
var input_gender =prompt("enter your gender")


if(input_gender == "male"){
    alert("Good morning Sir")

}else if(input_gender == "female"){
alert("Good morning ma'am ")

}else{
    alert("your are shemale")
}


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
//answer:
// var signal = prompt("enter your traffic light");

if(signal == "yellow"){
alert("Ready to move")

}else if(signal == "red"){

    alert("Must Stop")

}else if (signal == "green"){
    alert("Move now")

}else{
    alert("incorrect light")
}

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

//answer:


var fuel = prompt("enter your fuel")
if(fuel <=0.25){
alert("Please refill the fuel in your car")
}else{
    alert("You have enough fuel")
}

          ///////////question 5////////////
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }



// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }

//////////////////answer......///////
//  a.
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// b.
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}else{
    alert("given condition is false")
}

// c.
 var c = 12;
if (++c === 13){
alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
    }

    if (++c <=14){
        alert("condition 3 is true");
        }

        if(c === 14){
            alert("condition 4 is true");
            }

// d.
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// e.
 if (true){
    alert("True");
    }
    if (false){
        alert("False");
        }

// f. 
if("car" < "cat"){
    alert("car is smaller than cat");
    }


// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// Show the total marks, marks obtained, percentage, grade &
// remarks like:

///answer:

var sub1 = +prompt("enter your Subject 1")
var sub2 = +prompt("enter your Subject 2")
var sub3 = +prompt("enter your Subject 3")
var total_marks = +prompt("enter your totalmarks")

total_obtained = sub1 + sub2 + sub3  
percentage = (total_obtained / total_marks) * 100  
console.log(percentage+"%")

if(percentage >=80){
console.log("Grade = A")
console.log(" remarks = Excellent")
}else if(percentage >=60){
    console.log("Grade = B")
    console.log(" remarks = Good")
}else if(percentage >=50){
    console.log("Grade = C")
    console.log(" remarks = Wel")
}else{
    alert("not found")
}



// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// answer

var secretNum = 4;
var userNum = +prompt("enter your number")

if(userNum === secretNum){
alert("Bingo! Correct answer")

}else if (userNum+1 === secretNum){
    alert("Close enough to the correct answer")
}else{
    alert("Sorry, try again!")
}


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
//answer:

var num = +prompt("enter your number")

if(num%3 ==0){
alert(num+"is divisible by 3.")
}else{
    alert(num+"is not divisible by 3.")
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.
//answer:
// var num = +prompt("enter your number check this Even and Odd")

if(num%2 == 0){
alert("this Even number")
}else{
    alert("this  Odd number")
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

//answer:

var temperature = +prompt("enter temperature");
if(temperature >= 40){
alert("It is too hot outside.")
}else if(temperature >= 30){
    alert("The Weather today is Normal.")
}else if(temperature >= 20){
    alert("Today’s Weather is cool.")
}else if(temperature >= 10){
    alert("OMG! Today’s weather is so Cool.")
}else{
    alert("incorrect")
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

//answer:
var First_num = +prompt("enter first number")
var Second_num = +prompt("enter Second number")
var Operation = prompt("+ , - , * , / , % ")



if(Operation == "+"){
  console.log(First_num + Second_num + " = result")
     
}else if (Operation == "-"){
    console.log(First_num - Second_num + " = result")
}else if (Operation == "*"){
    console.log(First_num * Second_num + " = result")
}else if (Operation == "/"){
    console.log(First_num / Second_num + " = result")
}else if (Operation == "%"){
    console.log(First_num / Second_num*100 + "% = result")
}else{
    alert("Inter a Number!")
}
