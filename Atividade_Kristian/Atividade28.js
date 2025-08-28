const conta = {
    titular: "Pedro",
    saldo: 1417,

    depositar: function(valor){
        if(valor > 0){
            this.saldo += valor;
            console.log('Deposito de R$${valor} realizado.')
        }else{
            console.log("Valor Invalido para deposito!!")
        }
    },

    sacar: function(valor){
        if (valor > 0 && valor <= this.saldo){
            this.saldo -= valor;
            console.log('Saldo Insuficiente ou valor Invalido.')
        }
    },

    varSaldo: function(){
        console.log('Saldo Atual de ${this.titular}: R$${this.saldo}');
    }
}

conta.varSaldo();
conta.depositar(500);
conta.varSaldo();
conta.sacar(200);
conta.varSaldo()