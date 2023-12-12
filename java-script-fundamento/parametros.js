// parâmetros de função

              //10  //40  
// function soma(num1, num2){
//     return num1 + num2;
// }

// console.log(soma(10, 40));
// console.log(soma(10, 90));
// console.log(soma(10, 190));

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}

//console.log(nomeIdade(25, "Clesio"))

function soma(num1, num2){
    return num1 + num2;
}

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(2, 2)));

function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula')

   function comParametro(param) {
    console.log(param)
   }
   comParametro()