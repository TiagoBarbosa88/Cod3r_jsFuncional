// Função Construtora

function Produto(nome, preco, desc = 0.15) {
  this.nome = nome;
  this.preco = preco;
  this._desc = desc;

  this.precoFinal = () => {
    return this.preco * (1 - this._desc);
  };

}

// console.log(typeof Produto);
// console.log(typeof Promise);
// console.log(typeof Object);



Produto.prototype.log = function() {
  console.log(`Nome: ${this.nome}, Preço: R$ ${this.preco}`);
}

Object.defineProperty(Produto.prototype, 'desc', {
  get: function(){
    return this._desc
  },
  set: function(novoDesc){
    if(novoDesc >= 0 && novoDesc <= 1){
      this._desc = novoDesc
    }
  }
})

Object.defineProperty(Produto.prototype, 'descString', {
  get: function(){
    return `${this._desc * 100}% de desconto`
  }
})

const p1 = new Produto('Caneta', 10);
console.log(p1.nome);

p1.log()

const p2 = new Produto('Geladeira', 3000);
console.log(p2.preco);
console.log(p2.precoFinal().toFixed(2));

p2.desc = 0.99
console.log(p2.desc);
console.log(p2.descString);