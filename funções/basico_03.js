// array function

const felizNatal = () => console.log('Feliz Natal !!');

felizNatal();

const saudacao = (nome) => 'Fala ' + nome + "!!!"
console.log(saudacao('Tiago'));

const somar = numeros => {
  let total = 0
  for( let n of numeros){
    total += n
  }
  return total
}

console.log(somar([1,2,3,4,5,6,7,8,9,10]));

const somarContas = (...contas) => {
  // console.log(Array.isArray(contas));
  let total = 0
  for(let n of contas){
    total += n
  }
  return total
}

console.log(somarContas(120,60,170,100,120));


const potencia = base => {
  return exp => {
    return Math.pow(base, exp)
  }
}

const potencia2 = base => exp => Math.pow(base, exp)

console.log(potencia(2)(8))
console.log(potencia2(2)(10))


// this
Array.prototype.log = function(){
  console.log(this);
}

const numeros = [1,2,3]
numeros.log()

// Pegar ultimo 

Array.prototype.ultimo = function(){
  console.log(this[this.length - 1]);
}

const numeros1 = [1,2,3]
numeros.ultimo()



// Pegar primero
Array.prototype.primeiro = function(){
  console.log(this[0]);
}

const numeros10 = [-10,1,2,3]
numeros10.primeiro()