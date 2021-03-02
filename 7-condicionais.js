console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


const idadeComprador = 19;
const estaAcompanhada = true;
const temPassagem = true;

console.log("Detinos possíveis:");
console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(2,1); //removendo item
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagem == true) {
    console.log("Boa viagem");
}else {
    console.log("Você não pode embarcar");
}
   

console.log(listaDeDestinos);
