function bomDia(){
  console.log('Bom dia');
}

const boaTarde = function (){
  console.log('Boa tarde');
}


// 1) Passar um função como parametro para outra função
function executarQualquerCoisa(fn){
  if(typeof fn === 'function'){
    fn()
  }
  
};

executarQualquerCoisa(112)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// 2) Retornar uma função a partir de uma outra função

function potencia(base){
  return function(exp){
    return Math.pow(base, exp)

  }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(9));