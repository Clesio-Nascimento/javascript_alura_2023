const idadeMinima = 18;
const idadeCliente = 19;

// if (idadeCliente >= idadeMinima ){
//     console.log("Cerveja")
// } else {
//     console.log("Suco");
// }
            //condição                     //true    //false
console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco")

const nome = "clesio";
const str = "Clesio";

console.log(nome === str.toLocaleLowerCase() ? "São iguais" : "não são iguais");

const pedido = `${nome} diz: "Por favor, quero beber ${idadeCliente >= idadeMinima ? "Cerveja" : "Suco"}"`;

console.log(pedido)