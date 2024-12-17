import {calcularNota} from "./biblioteca.js";
  
  
  // Testando a função com os cenários:
  console.log(calcularNota(90));  // Saída: A
  console.log(calcularNota(75));  // Saída: C
  console.log(calcularNota(60));  // Saída: D
  console.log(calcularNota(0));   // Saída: F
  console.log(calcularNota(59));  // Saída: F
  console.log(calcularNota(89));  // Saída: B
  console.log(calcularNota(69));  // Saída: D
  console.log(calcularNota(79));  // Saída: C
  console.log(calcularNota(99));  // Saída: A