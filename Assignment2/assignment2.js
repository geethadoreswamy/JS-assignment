//This function takes a name as an argument and returns a greeting string.
function greet(name) 
{ 
    return "Hello, " + name + "!"; 
} 

//This function takes two numbers as arguments and returns their sum.
function add(a, b) { 
    return a + b; 
} 
console.log(add(2, 3));

//This function calculates and returns the area of a rectangle.
function calculateArea(length, width) {
    return length * width;
  }
  console.log(calculateArea(5, 3)); 
  

//This function expression takes two numbers as arguments and returns their product.
const multiply = function(a, b) {
    return a * b;
  };
  console.log(multiply(4, 5));

//5. Anonymous Function that Returns the Sum of All Numbers in an Array
const sumArray = function(numbers){

    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sumArray([1, 2, 3, 4])); 
  
//6. Function multiplyNumbers(a, b = 1)
//This function multiplies two numbers. If the second argument is not provided, it uses 1 as the default value.
function multiplyNumbers(a, b = 1) {
    return a * b;
  }
  console.log(multiplyNumbers(5)); 
  console.log(multiplyNumbers(5, 2)); 
  
//7This function takes any number of arguments and returns the sum of those arguments.

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4)); 
 
 
//8This function returns a new array with the elements of the original array in reverse order.
function reverseArray(arr) {
    return arr.slice().reverse();
  }
  console.log(reverseArray([1, 2, 3, 4])); 
  
//9. Hoisting with Function Declarations vs. Function Expressions
console.log(declaredFunction()); 

function declaredFunction() {
  return "I am declared!";
}

  const expressionFunction = function() {
    return "I am an expression!";
  };
  
  console.log(expressionFunction()); 
  

