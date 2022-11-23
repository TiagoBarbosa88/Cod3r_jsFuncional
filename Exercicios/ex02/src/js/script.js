
function captura() {
  let contas = document.querySelector('#contas').value;
  let contas1 = document.querySelector('#contas1').value;
  let contas2 = document.querySelector('#contas2').value;
  
  const result = parseInt(contas) + parseInt(contas1) + parseInt(contas2);
  console.log(result);
  
  document.querySelector('#total').innerHTML = `R$ ${result}`
 
}

