// Function Expression
const increment1 = function(n){
    return n + 1
}

// Arrow Function is always anonymous

const increment2 = (n) =>{
    return n + 1
}

// Apenas um paramento pode tirar os parentes
const increment3 = n =>{  
    return n + 1
}

// Simplificando ainda mais
const increment4 = n =>  n + 1

// Arrow com dois parametros
const sum = (a,b) => a + b

console.log(increment1(1));
console.log(increment2(5));
console.log(increment3(20));
console.log(increment4(30));
console.log(sum(3,8));