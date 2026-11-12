export abstract class Funcionario {
    private nome: string;
    private matricula: string;
    private salario: number;

    constructor(nome: string, matricula: string, salario: number) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }

    public abstract calcularBonusSalarial(): number;

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getMatricula(): string {
        return this.matricula;
    }

    public setMatricula(matricula: string): void {
        this.matricula = matricula;
    }

    public getSalario(): number {
        return this.salario;
    }

    public alterarSalario(novoSalario: number): void {
        if (novoSalario > 0) {
            this.salario = novoSalario;
        } else {
            console.log("Salário inválido.");
        }
    }
}