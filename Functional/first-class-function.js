/* 
* A programming language is said to have
* First-Class functions when functions in
* That language are treated like any other
* Variable
*/


const add = function(a, b){
    return a + b
}

const subtract = function(a,b){
    return a - b
}

const multiplication = (a, b) => a * b;

const division = (a, b) => a / b 


console.log(add(10,20));
console.log(subtract(10,20));
console.log(multiplication(10,20));
console.log(division(10,20));
