function verificarSinal(numero) {
    const numeroConvertido = Number(numero);
  
    if (isNaN(numeroConvertido)) {
      return "Entrada inválida: não é um número";
    } else if (numeroConvertido > 0) {
      return "Positivo";
    } else if (numeroConvertido < 0) {
      return "Negativo";
    } else {
      return "Zero";
    }
  }
  
  // Testando a função com os cenários:
  console.log(verificarSinal(5));   // Saída: Positivo
  console.log(verificarSinal(-3));  // Saída: Negativo
  console.log(verificarSinal(0));   // Saída: Zero
  console.log(verificarSinal("1110")); // Saída: Positivo
  console.log(verificarSinal("-987654321")); // Saída: Negativo