////////////////assignment 14 to 16//////////////
// 1. Declare an empty array using JS literal notation to store
// student names in future.

//answer:

var student_Name = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
var student_Name = new Array();
console.log(student_Name);

// 3. Declare and initialize a strings array.
// 4. Declare and initialize a numbers array.
// 5. Declare and initialize a boolean array.
// 6. Declare and initialize a mixed array.
var str = ["Sohaib", "Ali", "ali"];
var num = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true];
var mixArray = ["Sohaib", 23, true, "developer"];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
//answer:
var education_qual = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];
console.log(education_qual)


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var student_name = ["Sohaib","ali","Adil"]
var student_num = [420,380,250]
 for(var i = 0; i <student_name.length;i++){
    var perc = (student_num[i]/500)*100;
console.log("student name :  " + student_name[i] +" score "+student_num[i] +"  percentages of students "+ perc)
 }

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
 
var colors_name = ["Red", "Green", "Blue", "Yellow", "Purple"]


// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// a. Add color to the beginning  
//  answer:
//  var new_color = prompt("enter new color start beginning ")
//  colors_name.unshift(new_color)
//  console.log(colors_name)
 
 
// b. Ask the user what color he/she wants to add to the end
// push end add 

// answer


var new_color = prompt("enter new color start beginning ")
 colors_name.push(new_color)
 console.log(colors_name)



// c. Add two more color to the beginning of the array.
// Displa

// answer:

 colors_name.unshift("orange","red")
 console.log(colors_name)

// / d. Delete the first color in the array. Display the updated
// array in 
// delete start 
// // answer:
colors_name.shift()
console.log(colors_name)


// e. Delete the last color in the array. Display the updated
// array in your bro
// answer
// delete array last 

colors_name.pop()
console.log(colors_name)



// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

answer

var index = parseInt(prompt("enter index add color"))
var new_color =prompt("add new color")
colors_name.splice(index,0,new_color)
console.log(colors_name)



// g. Delete color(s) at specific index 

 var index = parseInt(prompt("enter index add color"))
var count =prompt("enter count delete color")
colors_name.splice(index,count)
console.log(colors_name)

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
// answer

let studentScores = [85, 90, 78, 92, 88, 76, 95, 89];  
  
studentScores.sort();  
  
console.log(studentScores);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var city_name = ["Karachi","lahore","islamabad","Quetta","Peshwaer"]

var selected_city= city_name.slice(2,4)

console.log(selected_city)



// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This ", " is ", " my ", " cat"];
var result = arr.join(",");
console.log(result); 



// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var new_array =["keyboard","mouse","printer","monitor"]
new_array.push("keyboard")
new_array.shift()
new_array.unshift("printer");
console.log(new_array)



// 14. Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)


var new_array =["keyboard","mouse","printer","monitor"]
new_array.push("keyboard")
new_array.shift()
console.log(new_array)



// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
// answer:

    var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

 
    document.write('<select>');

    for (var i = 0; i < manufacturers.length; i++) {
        document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
    }

    document.write('</select>');