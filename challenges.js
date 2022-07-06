// super easy
var num1=6;
var num2=2;

var difference=(num1-num2);
console.log("The difference between " + num1 + " and " + num2 + " is " + difference);

// easy
var name1= "ismael";
var name2= "ruby";
var length1=name1.length;
var length2=name2.length;


if (length1 > length2){
    longer=name1
    shorter=name2
    by = length1 - length2
} else {
    longer=name2
    shorter=name1
    by = length2 - length1
}

console.log("The name " + longer + " is longer than " + shorter + " by " + by + " characters");

// medium
const prompt = require("prompt-sync")({ sigint: true});
var input = prompt("Hello! Do you have something to say? :");

if (input == input.toUpperCase()) {
    return console.log('Why are you yelling?');
 }
 if (input == input.toLowerCase()){
    return console.log('I am going to need you to speak up please.');
 }
 else{
    return console.log('Thank you for speaking normally.');
 }

 //hard
 function add(num1, num2){
   var sum = num1 + num2;
   return console.log(sum)
 }

//  add(1,2);

 function subtract(num1, num2){
   var difference = num1 - num2;
   return console.log(difference)
 }
//  subtract(3,2)

 function multiply(num1, num2){
   var product = num1 * num2;
   return console.log(product)
 }
//  multiply(3,4)

 function divide(num1, num2){
   var quotient = num1 / num2;
   return console.log(quotient)
 }
//  divide(10,2)

 //super hard
 

 var num1 = prompt("please enter your first number:")
 var num2 = prompt("please enter your second number:")
 var operation = prompt("please enter one of the following, +, -, *, /  in order to add, subtract, multiply, or divide:")

 if (operation == "+"){
   add(num1, num2)
 }
 else if (operation == '-'){
   subtract(num1, num2)
 }
 else if (operation == "*"){
   multiply(num1, num2)
 }
 else if (operation == "/"){
   divide(num1, num2)
 }
 
