function fatorial(n) {
    if (n < 0) {
      return "O fatorial não está definido para números negativos.";
    }
  
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  // Testando a função com os cenários:
  console.log(fatorial(5));  // Saída: 120
  console.log(fatorial(0));  // Saída: 1
  console.log(fatorial(3));  // Saída: 6
  console.log(fatorial(12)); // Saída: 479001600