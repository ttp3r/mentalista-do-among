var numeroSecreto = parseInt(Math.random() * 11);
function Chutar() {
  var elementoResultado = document.getElementById("resultado");

  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou! 😃";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Por favor, digite um número de 0 a 10!";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Hmm, este número é muito grande 🤔";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "🤔 Quase lá!";
  } else {
    elementoResultado.innerHTML = "Ops, você errou 🙁 tente novamente";
  }
}
