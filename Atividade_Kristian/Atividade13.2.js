const prompt = require('prompt-sync')({sigint: true});

let totalLinhas = parseInt(prompt("Quantas estrelas voce quer?: "));

let linha = 1;

while (linha <= totalLinhas){
    let estrelas = "*"
    let i = 0;

    while (i < linha){
        estrelas += "*";
        i++;
    }
    console.log(estrelas)
    linhas++;
}