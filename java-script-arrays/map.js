const notas = [10, 9.5, 8, 7, 6];

// notas.forEach(function (nota, i) {
//     notas[i] = nota + 1;
// })

// console.log(notas)

const notasAtualizadas = notas.map((nota) => {
    
    return nota + 1 >= 10 ? 10 : nota + 1;
})

console.log(notasAtualizadas)