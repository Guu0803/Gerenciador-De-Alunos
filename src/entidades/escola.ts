import { Aluno } from './aluno';
import { Turma } from './turma';

export class Escola {
    public nome: string;
    private turmas: Turma[] = [];

    constructor(nome: string) {
        this.nome = nome;
    }

    cadastrarTurma(turma: Turma): void {
        if (this.turmas.some(t => t.codigo === turma.codigo)) {
            throw new Error(`A turma com o código ${turma.codigo} já está cadastrada.`);
        }
        this.turmas.push(turma);
    }

    buscarTurma(codigo: number): Turma | undefined {
        return this.turmas.find(t => t.codigo === codigo);
    }

    listarTurmas(): Turma[] {
        return this.turmas;
    }

    cadastrarAluno(aluno: Aluno, codigoTurma: number): void {
        const turma = this.buscarTurma(codigoTurma);
        if (!turma) {
            throw new Error(`A turma com o código ${codigoTurma} não existe.`);
        }
        turma.adicionarAluno(aluno);
    }

    removerAluno(email: string): void {
        this.turmas.forEach(turma => {
            turma.removerAluno(email);
        });
    }

    buscarAluno(email: string): Aluno | undefined {
        for (const turma of this.turmas) {
            const aluno = turma.alunos.find(a => a.email === email);
            if (aluno) {
                return aluno;
            }
        }
        return undefined;
    }

    listarTodosAlunos(): Aluno[] {
        return this.turmas.flatMap(turma => turma.alunos);
    }

    listarAlunosAtivos(): Aluno[] {
        return this.listarTodosAlunos().filter(aluno => aluno.ativo);
    }

    listarAlunosInativos(): Aluno[] {
        return this.listarTodosAlunos().filter(aluno => !aluno.ativo);
    }

    gerarRelatorio(): void {
        const totalAlunos = this.listarTodosAlunos().length;
        const totalTurmas = this.turmas.length;
        const alunosComMediaEsperada = this.listarTodosAlunos().filter(aluno => aluno.calcularMedia() >= 6);
        const alunosAbaixoMedia = this.listarTodosAlunos().filter(aluno => aluno.calcularMedia() < 6);

        console.log('Relatório Completo:');
        console.log(`Quantidade de alunos: ${totalAlunos}`);
        console.log(`Quantidade de turmas: ${totalTurmas}`);
        console.log(`Alunos com a média esperada: ${alunosComMediaEsperada.length}`);
        console.log(`Alunos abaixo da média esperada: ${alunosAbaixoMedia.length}`);
    }
}
