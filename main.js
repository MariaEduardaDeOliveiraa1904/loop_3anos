function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual a melhor marca?");

    
    if (respostaTime.toLowerCase() === "nike") {
      alert("Isso mesmo! A nike é a melhor marca!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}
// Chamada da função para iniciar o processo
verificarTime();
