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

  export function verificarSinal(numero) {
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

  export function encontrarMenor(num1, num2, num3) {
    let menor = num1;
  
    // Compara o primeiro número com o segundo
    if (num2 < menor) {
      menor = num2;
    }
  
    // Compara o menor até agora com o terceiro
    if (num3 < menor) {
      menor = num3;
    }
  
    return menor;
  }

  export function saoMultiplos(numero1, numero2) {
    // Verifica se ambos os números são diferentes de zero
    if (numero1 === 0 || numero2 === 0) {
      return false; // Se algum dos números for zero, não são múltiplos
    }
  
    // Verifica se o resto da divisão de um número pelo outro é zero
    return numero1 % numero2 === 0 || numero2 % numero1 === 0;
  }

  export function ehBissexto(ano) {
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

  export function ehVogal(caractere) {
    const vogais = 'aeiou';
    const caractereMinusculo = caractere.toLowerCase(); // Converte para minúsculo para comparação
    return vogais.includes(caractereMinusculo);
  }
  
  export function verificarVogalConsoante(caractere) {
    if (ehVogal(caractere)) {
      return "Vogal";
    } else {
      return "Consoante";
    }
  }

  export function calcularNota(porcentagem) {
    switch (true) {
      case porcentagem >= 90:
        return 'A';
      case porcentagem >= 80:
        return 'B';
      case porcentagem >= 70:
        return 'C';
      case porcentagem >= 60:
        return 'D'; 1 
      default:
        return 'F';
    }
  }

  export function somaAteN(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
      soma += i;
    }
    return soma;
  }

  

