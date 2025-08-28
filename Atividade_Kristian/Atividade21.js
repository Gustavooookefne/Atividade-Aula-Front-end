function filtrarNumeros(array, numero){
    let resultado = [];

    for (let i = 0; i <array.lenght; i++){
        if (array[i] > numero){
            resultado.push(array[i])

        }
    }

    return resultado;
}

let array = [1 ,2 ,3 ,4, 5, 6, 7 ,8]
let numero = 5;

console.log(filtrarNumeros(array, num))