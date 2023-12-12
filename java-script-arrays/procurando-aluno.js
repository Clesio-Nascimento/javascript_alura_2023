const alunos = ['João', 'Juliana', 'Ana', 'Caio'];

const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

const exibeNomeENotas = (aluno) => {
    if (listaDeAlunosEMedias[0].includes(aluno)){
        
        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];
        // Desestruturação
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);        

        return `${aluno} está cadastrado, sua nota foi ${medias[indice]}`

    } else {
        return "Aluno não encontrado!"
    }
}

console.log(exibeNomeENotas('Ana'));