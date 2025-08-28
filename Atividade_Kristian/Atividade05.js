function AnoBixesto(ano){
    if((ano %4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
        console.log(ano + "O ano é Bixesto!")
    }else{
        console.log(ano + "O ano não é bixesto!")
    }
}

verificarAno(2025);
verificarAno(2023);
verificarAno(2405);
verificarAno(1264);