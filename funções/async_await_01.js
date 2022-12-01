function espeararPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), tempo);
  });
}

/* 

espeararPor(2000)
  .then(() => console.log('Executando Promisse 1 '))
  .then(espeararPor)
  .then(() => console.log('Executando Promisse 2 '))
  .then(espeararPor)
  .then(() => console.log('Executando Promisse 2 '))


 */

function retornarValor(){
  return new Promise(resolve => { 
    setTimeout(() => resolve(10), 5000)
   })
}


async function executar(){
  let valor = await retornarValor()

  await espeararPor(1500)
  console.log(`Async/Await ${valor}`);

  await espeararPor(1500)
  console.log(`Async/Await ${valor +1} `);

  await espeararPor(1500)
  console.log(`Async/Await ${valor + 2}`);

  return valor + 3
}

executar().then(console.log)
