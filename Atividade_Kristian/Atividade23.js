function contadorVogais(texto){
    let contador = 0;
    let vogais = "aeiouAEIOU"; 

    for(let i = 0; i < texto.length; i++){ 
        if (vogais.includes(texto[i])){
            contador++;
        }
    }

    return contador;
}

let texto = "Um jogo é jogado em algum lugar"
console.log(contadorVogais(texto)); 
