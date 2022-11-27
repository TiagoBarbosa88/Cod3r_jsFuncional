setTimeout(function () {
  console.log('Executando callback...');

  setTimeout(function () {
    console.log('Executando callback 2');

    setTimeout(function () {
      console.log('Executando callback 3');
    }, 2000);

  }, 2000);

}, 2000);

function espeararPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Executando Promisse');
      resolve();
    }, tempo);
  });
}

espeararPor()
  .then(() => espeararPor())
  .then(espeararPor)