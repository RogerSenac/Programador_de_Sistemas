import {verificarSinal} from "./biblioteca.js";
  
  // Testando a função com os cenários:
  console.log(verificarSinal(5));   // Saída: Positivo
  console.log(verificarSinal(-3));  // Saída: Negativo
  console.log(verificarSinal(0));   // Saída: Zero
  console.log(verificarSinal("1110")); // Saída: Positivo
  console.log(verificarSinal("-987654321")); // Saída: Negativo