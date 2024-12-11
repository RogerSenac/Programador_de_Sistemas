var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var n1 = Number (lines[0]);
var n2 = Number (lines[1]);
var P1 = 3.5;
var P2 = 7.5; 
var mediaP = (n1 * P1 + n2 * P2)/(P1 + P2);

console.log('MEDIA =', mediaP.toFixed(5));