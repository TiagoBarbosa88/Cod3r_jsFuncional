/*
* Functions that operate on other functions
* Either by traking them as arguments or by
* returning them, are called higher-order functions
*/

function run(fn){
    return fn()
}

function sayHello(){
   console.log("Hello");
}

run(function(){
    console.log("Runnn");
})

const result = run(Math.random)

console.log(result);