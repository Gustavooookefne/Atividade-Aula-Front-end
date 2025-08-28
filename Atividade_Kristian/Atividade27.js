const hoje = new Date();

const dataFuturo = new Date();
dataFuturo.setDate(hoje.getDate() + 100)

console.log("Hoje: " + hoje.toLocaleDateString());
console.log("100 dias depois: " + dataFuturo.toLocaleDateString);