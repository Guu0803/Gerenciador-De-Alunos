import { Aluno } from './entidades/aluno';
import { Turma } from './entidades/turma';
import { Escola } from './entidades/escola';

const listaDeAlunos: object[] = [];

const aluno = new Aluno('Gustavo', 'Nogueira', 'teste@gmail.com', 'EAD', '17/11/1981', true);
// const emailTeste = new Aluno('Gustavo', 'Nogueira', 'testegmail.com', 'EAD', '17/11/1981', true);
// const idadeTeste = new Aluno('Gustavo', 'Nogueira', 'testegmail.com', 'EAD', '17/11/2015', true);
const aluno1 = new Aluno('Bruno', 'Almeida', 'bruno.almeida@gmail.com', 'Presencial', '25/09/1997', false);
const aluno2 = new Aluno('Carla', 'Pereira', 'carla.pereira@hotmail.com', 'EAD', '13/04/1998', true);
const aluno3 = new Aluno('Rafael', 'Oliveira', 'rafael.oliveira@yahoo.com', 'Presencial', '19/02/1991', false);
const aluno4 = new Aluno('Fernanda', 'Matos', 'fernanda.matos@gmail.com', 'EAD', '30/06/1998', true);

listaDeAlunos.push(aluno, aluno1, aluno2, aluno3, aluno4);


// console.log(listaDeAlunos);

// console.log(aluno);

// aluno.nome = 'Marcos';
// aluno.sobrenome = 'Teste'
// aluno.email = 'marcos@gmail.com';
// aluno.modelo = 'EAD';
// aluno.dataDeNascimento = '15/05/1995';
// aluno.ativo

//console.log(aluno);

// const escola = new Escola('Escola Exemplo');

// const turma1 = new Turma(1, 10, 'Turma de EAD', 'EAD');
// const turma2 = new Turma(2, 10, 'Turma Presencial', 'Presencial');

// escola.cadastrarTurma(turma1);
// escola.cadastrarTurma(turma2);

// // Cadastrando os alunos especificando a turma
// escola.cadastrarAluno(aluno, 1);
// escola.cadastrarAluno(aluno1, 2);
// escola.cadastrarAluno(aluno2, 1);
// escola.cadastrarAluno(aluno3, 2);
// escola.cadastrarAluno(aluno4, 1);

// escola.gerarRelatorio();
