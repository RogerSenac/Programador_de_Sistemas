function saoMultiplos(numero1, numero2) {
    // Verifica se ambos os números são diferentes de zero
    if (numero1 === 0 || numero2 === 0) {
      return false; // Se algum dos números for zero, não são múltiplos
    }
  
    // Verifica se o resto da divisão de um número pelo outro é zero
    return numero1 % numero2 === 0 || numero2 % numero1 === 0;
  }
  
  // Testando a função com os cenários:
  console.log(saoMultiplos(10, 5));  // Saída: true
  console.g log(saoMultiplos(12, 7));  // Saída: false
  console.log(saoMultiplos(20, 4));  // Saída: true