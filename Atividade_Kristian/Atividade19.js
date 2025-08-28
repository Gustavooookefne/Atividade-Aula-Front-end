function CalcularMedia(numeros){
    let soma = 0;

    for(let i = 1; i <= numeros.length; i++){
        soma += numeros[i];
    }

    return soma / numeros.length;
}

console.log(CalcularMedia([1 ,2 ,3 ,4 ,5]));