// const notas = [10, 6.5, 8, 7.5];
// let media = 0;

// for (let i = 0; i < notas.length; i++){
//     media += notas[i];
// }

// console.log(media/notas.length);

const notas1 = [10, 6.5, 8, 7.5];
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5];

const notasGerais = [notas1, notas2, notas3];
let soma = 0;

for(let i = 0; i < notasGerais.length; i++){
    for(let cont = 0; cont < notasGerais[i].length; cont++){
        soma += notasGerais[i][cont]
    }
}
console.log(soma/9);