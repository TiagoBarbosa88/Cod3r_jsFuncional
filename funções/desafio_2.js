const carrinho = [
  {nome: "Caneta", qtde: 10, preco: 7.99, fragil: true},
  {nome: "Impressora", qtde: 1, preco: 649.50, fragil: true},
  {nome: "Caderno", qtde: 4, preco: 27.10, fragil: false},
  {nome: "Lapis", qtde: 3, preco: 5.82, fragil: false},
  {nome: "Tesoura", qtde: 1, preco: 19.20, fragil: true},
]

Array.prototype.meuReduce = function(fn, inicial){
  let acc = inicial

  for(let i = 0; i < this.length; i++){
    if(!acc && i === 0){
      acc = this[i]
    } else {
      acc = fn(acc, this[i], i , this)      
    }
  } 
  return acc  
}


// Desafio filter, map, reduce

const media = carrinho
      .filter(item => item.fragil)
      .map(item => item.qtde * item.preco)
      .meuReduce((acc, el) =>{
        const novaQtde = acc.qtde + 1
        const novoTotal = acc.total + el
        console.log(acc, el);
        return {
          qtde: novaQtde, 
          total: novoTotal, 
          media: novoTotal / novaQtde
        }

      }, {qtde: 0, total: 0, media: 0 })
      .media

console.log(`A média é ${media}`);      






/* 

// 1. fragil true
const frageis = item => item.fragil === true
const itensFragil = carrinho.filter(frageis)
console.log(itensFragil);

// 2 . qdt * preco -> total
const getTotal = (item) => item.qtde * item.preco
const totais = carrinho.map(getTotal)
console.log(totais);

// 3. media totais
const totalGeral = carrinho.reduce(acc, totais)
console.log(totalGeral); 

*/