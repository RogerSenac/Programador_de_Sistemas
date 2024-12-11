var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var A = Number(lines[0]);
var B = Number(lines[1]);
var C = Number(lines[2]);
var D = Number(lines[3]);

// Calculando a diferença conforme a fórmula 
var DIFERENCA = (A * B) - (C * D);
// Exibindo o resultado 
console.log(`DIFERENCA =`, DIFERENCA);
