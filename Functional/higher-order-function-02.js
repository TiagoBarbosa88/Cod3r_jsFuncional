function finalPrice(tax, price){
    return price * (1 + tax)
}

console.log(finalPrice(0.0875, 25.1));
console.log(finalPrice(0.0875, 21.7));
console.log(finalPrice(0.0875, 107.9));


// Curring
function finalPrice2(tax){
    return function(price){
        return price * (1 + tax)
    }
}

const nyFinalPrice = finalPrice2(0.085)

console.log(nyFinalPrice(20.01));