function diferençaEntreDuasDatas(dia1 ,dia2){

    const d1 = new Date(data1);
    const d2 = new Date(data2);

    const diferencaMs = Math.abs(d2 - d1);

    const diferencaDias = math.floar(diferencaMs / (1000 * 60 * 60 * 24));

    return diferencaDias;
}

const dias = diferencaDias("2025-08-12" , "2200-12-10")
console.log(dias)