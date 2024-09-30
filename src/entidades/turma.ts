import { Aluno } from './aluno';

export class Turma {
    private static totalTurmas: number = 0;
    private _alunos: Aluno[] = [];

    constructor(
        private _codigo: number,
        private _maximo: number,
        private _descricao: string,
        private _tipo: string
    ) {
        if (Turma.totalTurmas >= 10) {
            throw new Error('Número máximo de turmas atingido');
        }
        if (_codigo < 1 || _codigo > 10) {
            throw new Error('Código da turma deve estar entre 1 e 10');
        }
        if (_maximo < 5 || _maximo > 10) {
            throw new Error('Número máximo de alunos deve estar entre 5 e 10');
        }
        Turma.totalTurmas++;
    }

    // Getters e Setters
    get alunos(): Aluno[] {
        return this._alunos;
    }

    get codigo(): number {
        return this._codigo;
    }

    get maximo(): number {
        return this._maximo;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(value: string) {
        this._descricao = value;
    }

    get tipo(): string {
        return this._tipo;
    }

    // Método para adicionar um aluno à turma
    adicionarAluno(aluno: Aluno): void {
        if (this._alunos.length >= this._maximo) {
            throw new Error('Turma está cheia');
        }
        if (aluno.modelo !== this._tipo) {
            throw new Error('Tipo de aluno incompatível com o tipo da turma');
        }
        if (this._alunos.some(a => a.email === aluno.email)) {
            throw new Error('Aluno já cadastrado nesta turma');
        }
        this._alunos.push(aluno);
        // aluno.turma = this._codigo; // Atribui o código da turma ao aluno
    }

    // Método para remover um aluno da turma
    removerAluno(email: string): void {
        const index = this._alunos.findIndex(a => a.email === email);
        if (index !== -1) {
            this._alunos.splice(index, 1);
        }
    }

    // Getter estático para obter o número total de turmas criadas
    static get TotalTurmas(): number {
        return Turma.totalTurmas;
    }
}
