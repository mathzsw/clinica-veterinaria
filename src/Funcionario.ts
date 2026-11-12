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

    // O salário não possui setter público: sua alteração exige validação.
    public alterarSalario(novoSalario: number): void {
        if (!Number.isFinite(novoSalario) || novoSalario <= 0) {
            throw new Error("O salário deve ser um valor válido e maior que zero.");
        }
        this.salario = novoSalario;
    }
}