// const usuarioLogado = pessoa => {
//     let array = [];
//     for (let i = 0; i < 90000; i++){
//         array.push(i);
//     }
//     return `${pessoa} logou com sucesso!`
// }

// console.log(usuarioLogado("clesio"));

const acesso = (nome) => {
    return `${nome} Logado com sucesso!`
}

const usuarioLogado = (nome) => {
    let array = [];
    for(let i = 0; i < 90000; i++){
        array.push(i);
    }
    return acesso(nome);
}

const diretoriaLogado = (nome) => {
    let array = [];
    for(let i = 0; i < 900000; i++){
        array.push(i)
    }
    return acesso(nome);
}

console.log(diretoriaLogado("Clesio"));

const autentica = (cargo) => {
    let array = [];
    for(let i = 0; i < cargo; i++){
        array.push(i);
    }
    return true;


}

const login = (pessoa, autentica) => {
    if(pessoa.cargo === `funcionario`){
        autentica(90000)
    } else if(pessoa.cargo === `diretoria`){
        autentica(90000)
    }
    return acesso(pessoa.nome)
}

console.log(login({cargo: `diretoria`, nome: `Clesio`}, autentica));
