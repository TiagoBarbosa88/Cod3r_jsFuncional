function calcular() {
  const contas = document.querySelector('#contas').value;
  const contas1 = document.querySelector('#contas1').value;
  const contas2 = document.querySelector('#contas2').value;
  const btnCalcular = document.querySelector('#calcular');

  const result = parseInt(contas) + parseInt(contas1) + parseInt(contas2) || parseInt(contas) + parseInt(contas1) || parseInt(contas) + parseInt(contas2) || parseInt(contas1) + parseInt(contas2);

  document.querySelector('#resultado').innerHTML = `$ ${result}`;


}


