const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2028,

    getIdade: function(){
        const anoAtual = new date().getFullAno();
        return AnoAtual - this.ano;
    },

    getDescricao: function(){
        return 'marca ${this.marca}, Modelo: ${this.modelo}, Ano ${this.ano} , Idade: ${this.getIdade()} anos';
    }
};

console.log(carro.marca)

carro.ano = 2030
console.log(carro.ano)

console.log(carro.getIdade())

console.log(carro.getDescricao())
