// function minhaFuncao(param){
//     // bloco de código
// }

// minhaFuncao("param")

// expressão de função

//const soma = function(num1, num2){
//    return num1 + num2
//}
//console.log(soma(1, 2))

// Diferença principal: HOISTING
// funções e var são "listadas" no topo do arquivo.

console.log(apresentar())


function apresentar(){
    return "Olá"
}

const soma = function(numero1, numero2){return numero1 + numero2}

console.log(soma(3, 2))