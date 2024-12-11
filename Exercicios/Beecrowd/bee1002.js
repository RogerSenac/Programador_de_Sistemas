var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var raio = Number(lines[0]);
var pi = (3.14159);
var area = pi*raio**2;

console.log('A=' + area.toFixed(4));
