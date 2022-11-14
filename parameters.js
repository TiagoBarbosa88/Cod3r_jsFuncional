function logParams(a, b, c){
    console.log(a,b,c);
}

logParams(1,2,3)
logParams(1,2)
logParams(1)
logParams()
logParams(1,2,3,4,5)

//Definiar valor padrão para os parametros
function defaultParams(a=1,b=2,c=0 ){
    console.log(a,b,c);
}

defaultParams(7,8,9)
defaultParams(7,8)
defaultParams(7)
defaultParams()

// Passando mais parametros num array
function logNums(nums){
    for(let n of nums){
        console.log(n);
    }
}

logNums([1,2,3])

// spread/rest
/* function logNums1(...nums){
    console.log(Array.isArray(nums));
    for(let n of nums){
        console.log(n);
    }
} */

//Simplicando
function logNums1(...nums){
    console.log(nums)
    }

logNums1(1,2,3,4,5)


function sumAll(...nums){
    let total =0
    for(let n of nums){
        total += n
    }
    return total
}

console.log(sumAll(1,2,3,4,8));