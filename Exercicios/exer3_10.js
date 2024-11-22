function somaAteN(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
      soma += i;
    }
    return soma;
  }
  
  // Testando a função com os cenários:
  console.log(somaAteN(5));  // Saída: 15
  console.log(somaAteN(10)); // Saída: 55
  console.log(somaAteN(1));  // Saída: 1
  console.log(somaAteN(64)); // Saída: 2080