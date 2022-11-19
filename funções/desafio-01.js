// somar(3)(4)(5)

function somar(a){
  return function(b){
    return function(c) {
        return a + b + c
      }
    }
  
}

const somarAB = somar(3)(4)
console.log(somarAB(5)); 
console.log(somar(10)(10)(10));


// fb -> 3 * 7 
// fn -> 3 + 7
// fn -> 3 - 7

function calcular(x){
  return function(y){
    return function(fn){
      return fn(x,y)
    }
  }
}


function subtrair(a,b){
  return a - b
}

function multiplicar(a,b){
  return a * b
}

const r1 = calcular(10)(5)(subtrair)
console.log(r1);

const r2 = calcular(10)(5)(multiplicar)
console.log(r2);
