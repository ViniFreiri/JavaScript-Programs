console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


const idadeComprador = 17;
const estaAcompanhada = true;
let temPassagem = false;
const destino = "São Paulo";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador < listaDeDestinos.length) {
    if(listaDeDestinos[contador] == destino){ 
       destinoExiste = true;
       break;
    }

    contador = contador + 1;
};

if(destinoExiste == true) {
    console.log("Destino existe");
}else {
    console.log("Destino não existe");
}

if(destinoExiste && podeComprar) {
    console.log("Boa viagem!");
}else {
    console.log("Tivemos um erro!!");
}