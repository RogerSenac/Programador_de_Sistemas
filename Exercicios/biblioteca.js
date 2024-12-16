export function avaliarMedia (media) {
    if (media >= 7.0) {
        return "Aprovado"
     }
        return "Reprovado";
}

export function verificarParImpar(numero) {
    //if (numero % 2 === 0) {
    //  return "Par";
    // } else {
    //   return "Ímpar";
    // }
  return numero % 2===0 ? "Par": "Impar";
  }