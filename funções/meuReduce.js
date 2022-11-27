const carrinho = [
  {nome: "Caneta", qtde: 10, preco: 7.99, fragil: true},
  {nome: "Impressora", qtde: 1, preco: 649.50, fragil: true},
  {nome: "Caderno", qtde: 4, preco: 27.10, fragil: false},
  {nome: "Lapis", qtde: 3, preco: 5.82, fragil: false},
  {nome: "Tesoura", qtde: 1, preco: 19.20, fragil: true},
]

Array.prototype.meuReduce = function(fn, inicial){
  let acc = inicial

  for(let i; i < this.length; i++){
    if(!acc && i === 0){
      acc = this[i]
    } else {
      acc = fn(acc, this[i], i , this)      
    }
  } 
  return acc  
}

