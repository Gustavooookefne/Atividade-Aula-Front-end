function CalcularMedia(n1 ,n2 ,n3){
    let media = (n1 + n2 + n3) / 3
    let situacao;

    if (media >= 7){
        situacao = "Aprovado"
    }else if (media >= 5) {
        situacao = "Em Exame"
    }else{
        situacao = "Reprovado"
    }

    console.log('Notas: ${n1} , ${n2} , ${n3}')
    console.logo('Media: {media.toFixed(2)}')
    console.log('Situcao: ${situacao')

    CalcularSituacao(8 ,6 ,7 );
    CalcularSituacao(5 , 4, 6);
    CalcularSituacao(3 ,2 ,4);
}