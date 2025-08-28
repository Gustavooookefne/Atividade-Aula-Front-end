// Prompt pede para o usuario digitar um numero;
// split Divide a String em virgulas;
// traim retire os espaços;
// parsetInt trasnforma cada numero String em int

const prompt = require('prompt-sync')({sigint: true});
// para importar o prompt

let entrada = prompt("Digite o numero que voce quer usar para a tabuada: ")

let numero = entrada.split(",").map(n => parseInt(n.trim()));


numero.forEach(numero => {
    console.log('\nTabudada do ${numero}:')
    for(let i = 1; i <= 0; i++){
        console.log('${numero} x ${i} = ${numero * i');
    }
})