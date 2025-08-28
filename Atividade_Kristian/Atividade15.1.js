const prompt = require('prompt-sync')({sigint: true});

let num1 = parseFloat(prompt("Digite um numero para somar: "))

let num2 = parseFloat(prompt("Digite um outro numero: "))

let soma = num1 + num2;

console.log(soma)