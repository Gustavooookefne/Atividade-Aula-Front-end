for (let i = 1; i <=30; i++){
    let resultado = "";

    if (i % 3 === 0){
        resultado += "Fizz";
    }

    if (i % 5 === 0){
        resultado += "Buzz";
    }

    if (resultado === "")
        resultado = i;
}

console.log(resultado);