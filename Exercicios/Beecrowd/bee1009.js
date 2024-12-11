var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var nome = lines[0];
var salario = Number(lines[1]);
var vendas = Number(lines[2]);

var comissao = vendas * 0.15;
var totalReceber = salario + comissao;

console.log('TOTAL = R$' , totalReceber.toFixed(2));