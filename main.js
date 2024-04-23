function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual a melhor marca de roupas?");

    
    if (respostaTime.toLowerCase() === "nike") {
      alert("Isso mesmo! A nike é a melhor marca de roupas!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}
// Chamada da função para iniciar o processo
verificarTime(); 
