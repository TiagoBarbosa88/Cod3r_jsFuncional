function bomDia(){
  console.log('Bom dia');
}

const boaTarde = function (){
  console.log('Boa tarde');
}


// Passar um função como parametro para outra função
function executarQualquerCoisa(fn){
  if(typeof fn === 'function'){
    fn()
  }
  
};

executarQualquerCoisa(112)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// 2 Retornar uma função a partir de uma outra função

function potencia(basep){
  return function(exp){
    return Math.pow(base, exp)

  }
}

const bits8 = potencia(2,8)
console.log(bits8);