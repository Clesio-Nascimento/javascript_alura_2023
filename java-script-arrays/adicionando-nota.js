const notas = [10, 6, 8];

notas.push(7);

let media = 0;

for(let i = 0; i < notas.length; i++){
    media += notas[i]
}
console.log(media / notas.length)