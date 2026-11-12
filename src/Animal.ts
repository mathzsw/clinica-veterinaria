export abstract class Animal {
    private nome: string;
    private idade: number;
    private tutorResponsavel: string;

    constructor(nome: string, idade: number, tutorResponsavel: string) {
        this.nome = nome;
        this.idade = idade;
        this.tutorResponsavel = tutorResponsavel;
    }

    public abstract emitirSom(): void;
    public abstract cuidadosDiarios(): void;

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }

    public getTutorResponsavel(): string {
        return this.tutorResponsavel;
    }

    public setTutorResponsavel(tutorResponsavel: string): void {
        this.tutorResponsavel = tutorResponsavel;
    }
}