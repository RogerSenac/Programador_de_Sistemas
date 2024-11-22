function verificarParImpar(numero) {
    if (numero % 2 === 0) {
      return "Par";
    } else {
      return "Ímpar";
    }
  }
  
  // Testando a função com os cenários:
  console.log(verificarParImpar(4));   // Saída: Par
  console.log(verificarParImpar(7));   // Saída: Ímpar
  console.log(verificarParImpar(0));   // Saída: Par
  console.log(verificarParImpar(-5));  // Saída: Ímpar