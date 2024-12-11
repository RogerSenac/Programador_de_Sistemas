var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Função principal para realizar os cálculos e mostrar os resultados 
function calcularAreas(A, B, C) { 
    const pi = 3.14159;
    // a) Área do triângulo retângulo que tem A por base e C por altura 
    const areaTriangulo = (A * C) / 2; 
    // b) Área do círculo de raio C 
    const areaCirculo = pi * Math.pow(C, 2); 
    // c) Área do trapézio que tem A e B por bases e C por altura 
    const areaTrapezio = ((A + B) * C) / 2;
    // d) Área do quadrado que tem lado B 
    const areaQuadrado = Math.pow(B, 2); 
    // e) Área do retângulo que tem lados A e B 
    const areaRetangulo = A * B; 
    
    // Mostrando os resultados 
    
    console.log(`Área do triângulo: ${areaTriangulo.toFixed(2)}`); 
    console.log(`Área do círculo: ${areaCirculo.toFixed(2)}`); 
    console.log(`Área do trapézio: ${areaTrapezio.toFixed(2)}`); 
    console.log(`Área do quadrado: ${areaQuadrado.toFixed(2)}`); 
    console.log(`Área do retângulo: ${areaRetangulo.toFixed(2)}`); } 
    
    // Valores de entrada 
    const A = 3.0; 
    const B = 4.0; 
    const C = 5.2;