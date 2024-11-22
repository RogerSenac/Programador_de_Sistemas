function ehBissexto(ano) {
    if (ano % 4 === 0) {
      if (ano % 100 === 0) {
        return ano % 400 === 0;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  
  // Testando a função com os cenários:
  console.log(ehBissexto(2020));  // Saída: true
  console.log(ehBissexto(2024));  // Saída: true
  console.log(ehBissexto(1999));  // Saída: false
  console.log(ehBissexto(2014));  // Saída: false
  console.log(ehBissexto(2025));  // Saída: false
  console.log(ehBissexto(1900));  // Saída: false
  console.log(ehBissexto(2000));  // Saída: true
  console.log(ehBissexto(2100));  // Saída: false