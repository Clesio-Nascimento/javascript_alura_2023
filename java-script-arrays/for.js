const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const valores = [200, 300, 500, 800];

for (let i = 0; i < numeros.length; i++){
    for(let cont = 0; cont < valores.length; cont++){
        if(valores[cont] == numeros[i]){
            numeros.splice(i, 1)
        }
    }
} 

console.log(numeros);
