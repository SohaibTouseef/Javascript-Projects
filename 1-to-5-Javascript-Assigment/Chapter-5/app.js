
////////////assignment 5th
////////////////MATH EXPRESSIONS////////////////

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
// answer:
var a = +prompt("enter your number")
var b = +prompt("enter your number")
c = a+b
document.write("sum of   " + a +" and  "+ b +" = "+c)


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
//answer:
//////////////subtraction//////
var a = +prompt("enter your number")
var b = +prompt("enter your number")
c = a-b
document.write("sub of   " + a +" and  "+ b +" = "+c)



//////////////////multiplication/////////

var a = +prompt("enter your number")
var b = +prompt("enter your number")
c = a*b
document.write("multiplication of   " + a +" and  "+ b +" = "+c)


////////////division ///////////
var a = +prompt("enter your number")
var b = +prompt("enter your number")
c = a/b
document.write("Divison of   " + a +" and  "+ b +" = "+c)



/////////////modulus///////////


var a = +prompt("enter your number")
var b = +prompt("enter your number")
c = a%b
document.write("modulus of   " + a +" and  "+ b +" = "+c)



// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
//answer:

var math 

// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
//answer:
// console.log("value after variable declaration is ??" + math)


// c. Initialize the variable with some number.
//answer:

var num = 20;

// d. Show the value of variable in your browser like “Initial
// value: 5”.
//answer:

var sum = 5;
console.log("initial value " + sum)

// e. Increment the variable.
//answer:
sum++;


// f. Show the value of variable in your browser like “Value
// after increment is: 6”.

//answer

  
 console.log("value after increment is " + sum)


//g. Add 7 to the variable.
// //answer:
 sum +=7;


// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
//answer:

console.log("value after addition is " +  sum)

// i. Decrement the variable.
//answer:
sum--;

// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
//answer:
console.log("value after decrement is: "+ sum)

// k. Show the remainder after dividing the variable’s value
// by 3.
//answer:
var remainder = sum % 3;

// l. Output : “The remainder is : 0”.
//answer:
console.log ("this remainder "+ remainder)

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:
//answer:
var ticket_price = 600;
var total_cost = ticket_price*5;
console.log("total cost of buy 5 ticket moives  " +total_cost+"PKR")


// 5. Write a script to display multiplication table of any
// number in your browser. E.g

// answer

var a = 4;
count1=a*1;
count2=a*2
count3=a*3;
count4=a*4
count5=a*5;
count6=a*6
count7=a*7;
count8=a*8
count9=a*9;
count10=a*10

console.log("4 x 1 = "+count1+"\n"+  "4 x 2 = "+count2+"\n"+ "4 x 3 = "+count3+"\n"+"4 x 4 = "+count4+"\n"+"4 x 5 = "+count5+"\n"+"4 x 6 = "+count6+"\n"+"4 x 7 = "+count7+"\n"+"4 x 8 = "+count8+"\n"+"4 x 9 = "+count9+"\n"+"4 x 10 = "+count10+"\n")


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
//answer:
//////a
var tem_C = 40;
////////b
// Fahrenheit = ?
cen = (tem_C*9/5)+32
console.log(cen)



/////////c
var fahrenheit = 104

////d
// celsius_temp
//c(F-32)*5/9
celsius_temp=(fahrenheit-32)*5/9
console.log(celsius_temp)
//celsius_temp = 40;
console.log("Convert it to Celsius & output Fahrenheit temperature  "+fahrenheit+"   is celsius_temp   "+celsius_temp)


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables



// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

// answer:
var price_item1 = 60;
var price_item2 = 40;
var Qty_item1 = 1;
var Qty_item2 = 3;
totalcost = (price_item1*Qty_item1)+(price_item2*Qty_item2)
console.log("price item1 is = 60\n"+"QTY item1 = 1\n"+"price item2 = 40\n"+"Qty item2 = 3\n"+"totalcost your order  = "+totalcost)



// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
//answer:


var obtained_marks =804;
var total_marks =980;
percentage = (obtained_marks/total_marks)*100;
console.log("total marks = 980\nobtained marks = 804 \npercentage = "+percentage)



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
//answer:

var us_dollar = 10;
rate_usdollar = 104.80
var sauid_riyals=25;
rate_saudirayials = 28;
convert = (us_dollar*rate_usdollar)+(sauid_riyals*rate_saudirayials)
console.log("Total currency in PKR :  "+convert)


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
//answer:
var num3= 10 ;

count =(num3+5)*10/2;
console.log(count)


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.
//answer:

var current_year = 2024;
var birth_year = 2001;
age1 = 23;
age2= 22;
age1= current_year - birth_year
age2= (current_year - birth_year)-1;
console.log("They are either "+age1 +" or " + age2  + "  years old" )


// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
//answer:
////////////////circumference/////////
var radius =20;
circumference=2*3.142*radius;
console.log(circumference)
//////////////area///////////
area = (3.142*radius **2)
console.log(area)

console.log("circumference "+circumference+"  area "+area)


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
//answer:
var favorite_snack = "chocolatechip"
var current_age = 15;
var max_age = 65;
var amount_snack_per_day =3;
cal=(max_age-current_age)*amount_snack_per_day
console.log("ou will need "+cal+" to last you until the ripe old age of  "+max_age)

/////complete 5 assignment ////////// 