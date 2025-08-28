function contarQuntasVezes (array , numero) {
    let contador = 0;

    for (let i = 1; i <= array.lenght; i++){
        if(array[i] === valor){
            contador++;
        }
    }

    return contador;
}

let array = [1 ,2 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,4 ,5]
let valor = 8;

console.log(contarQuntasVezes(array , valor));