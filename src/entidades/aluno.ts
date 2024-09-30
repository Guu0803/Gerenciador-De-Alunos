export class Aluno {
  private _nome: string;
  private _sobrenome: string;
  private _email: string;
  private _modelo: string;
  private _notas: number[] = [];
  private _turma: number;
  private _nascimento: Date;
  private _ativo: boolean = true;

  constructor(
    nome: string,
    sobrenome: string,
    email: string,
    modelo: string,
    nascimento: string,
    ativo:boolean     
  ) {
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._email = email;
    this._modelo = modelo;
    this._nascimento = this.formatarData(nascimento);
    this._notas = this.gerarNotas();
    this._turma = this.gerarNumeroDeTurma();
    this._ativo = ativo
  }
  //atualiza os dados do aluno
  get nome() {
    return this._nome;
  }
  set nome(nome:string) {
    // try usado para validar as informações, caso não passe, ele lança um erro e   mostra ao usuário como um alert
    try {
      // verificando se a string não está vazia
      if (!nome) throw new Error('Nome inválido');
      this._nome = nome;
    } catch (error) {
      alert(error); 
    }
  }
  get sobrenome() {
    return this._sobrenome;  
  }
  set sobrenome(sobrenome: string) {
    try {
      if (!sobrenome) throw new Error('Sobrenome inválido');
      this._sobrenome = sobrenome;
    } catch (error) {
      alert(error);
    }
  }
  get email() {
    return this._email;  
  }
  set email(email: string) {
    try {
      if (!email) throw new Error("E-mail inválido");
      if (!email.includes('@')) throw new Error('E-mail inválido');
      this._email = email;
    } catch (error) {
      alert(error);
    }
  }
  get modelo() {
    return this._modelo;
  }
  set modelo(modelo: string) {
    try {
      if(!modelo) throw new Error("Modelo inválido");
      this._modelo = modelo;
    } catch (error) {
      alert(error);
    }
  }
  //nascimento formatado para que uma pessoa ler normalmente 
  get nascimento() {
    return  this._nascimento.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  }
  set dataDeNascimento(nascimento: string)  {
    try {
      const dataDeNascimento:Date = this.formatarData(nascimento)
      this.validarIdade(dataDeNascimento);
      this._nascimento = dataDeNascimento;
    } catch (error) {
      alert(error);
    }
  }
  //função para formatar a data de dd/mm/aaaa para aaaa/mm/dd
  private formatarData(nascimento: string):Date {
    if(!nascimento) alert("Data de nascimento inválida");
    const dataDivida = nascimento.split('/')
    const dia = dataDivida[0]
    const mes = dataDivida[1]
    const ano = dataDivida[2]
    const nascimentoFormatado = new Date(`${ano}/${mes}/${dia}`)
    this.validarIdade(nascimentoFormatado)
    return  nascimentoFormatado
  }
  //validação da idade, impedindo que pessoas menores de 16 anos se matrícule
  private validarIdade(nascimento: Date): Date {
    const hoje = new Date()
    const idade = hoje.getFullYear() - nascimento.getFullYear();
    try {
      if (idade < 16) {
        throw new Error("Idade inválida, você deve ter mais de 16 anos para se matrícular");
      }
    } catch (error) {
      alert(error)
    }
    return nascimento
  }
  //calcula a média do aluno
  public calcularMedia(): number {
    let soma_notas: number = 0;
    this._notas.forEach(e => {
      soma_notas += e
    })
    const media: number = soma_notas / this._notas.length
    return media 
  }
  get notas() {
    return this._notas
  }
  //gera as notas do aluno aleatoriamente entre 0 a 10
  private gerarNotas(): number[]{
    let count = 0;
    let notas: number[] = []
    while (count < 5) {
      const notaAleatoria = Math.floor(Math.random() * (10 - 0 + 1));
      notas.push(notaAleatoria)
      count++;
    }
    return this._notas = notas
  }
  get turma() {
    return this._turma
  }
  //método para gerar o número da turma
  private gerarNumeroDeTurma(): number {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  }
  get ativo() {
    return this._ativo
  }
}
