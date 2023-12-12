const notas = [10, 6, 8, 5.5, 10];

notas.pop();

console.log(notas)
let media = 0;
for(i = 0; i < notas.length; i++){
    media += notas[i];
}

console.log(`A média das notas é ${media/notas.length}`)