function apresentar(nome){
    return `Meu nome ${nome}`;
}

// Arrow function
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//Arrow function com + de 1 linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 9 || num2 > 9){
        return "Somente numeros de 1 a 9"
    } else {
        return num1 + num2
    }
}

// HOISTING: arrow function se comporta como expressão

console.log(somaNumerosPequenos(7, 3))