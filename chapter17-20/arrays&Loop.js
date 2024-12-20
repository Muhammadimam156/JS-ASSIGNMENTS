//       =======================================CHAPTER 17 - 20 ARRAYS AND LOOP =================================


// . Declare and initialize an empty multidimensional array.
// (Array of arrays)

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Declare and initialize a multidimensional array 
// representing the following matrix:
//[0,1,2,3]
//[1,0,1,2]
//[2,1,0,1]
var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

//Write a program to print numeric counting from 1 to 10
for (var i = 0; i < 10; i++) {
    console.log(i + 1);
}

// Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.


          // prompt("enter a number to show multiplication table")
var number = 5;

           //  prompt("enter a length to show multiplication")
var length = 10;

for (var i = 1; i <= length; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

// Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Generate the following series in your browser. See 
// example output.


// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
for (var i = 1; i <= 15; i++) {
    console.log(i);
}

// Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

for (var i = 10; i >= 1; i--) {
    console.log(i);
}

// Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

for (var i = 0; i <= 20; i += 2) {
    console.log(i);
}

// Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21

for (var i = 1; i <= 21; i += 2) {
    console.log(i);
}


// Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

for (var i = 2; i <= 20; i += 2) {
    console.log(i + "k");
}


// Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12].

var A = [24, 53, 78, 91, 12];

var largest = A[0];
for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

console.log("The largest number in the array is: " + largest);

// Write a program to identify the smallest number in the  = [24, 53, 78, 91, 12]

var smallest = A[0];
for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}

console.log("The smallest number in the array is: " + smallest);

// Write a program to print multiples of 5 ranging 1 to 100.

for (var i = 5; i <= 100; i += 5) {
    console.log(i);
}





