function imprimirTabuadaCompleta() {
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        console.log(${i} x ${j} = ${i * j});
      }
      console.log('----------------'); // Separador visual entre as tabuadas
    }
  }
  
  // Chamando a função para imprimir a tabuada completa
  imprimirTabuadaCompleta();