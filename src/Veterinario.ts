import { Funcionario } from "./Funcionario.js";

export class Veterinario extends Funcionario {
    private consultasRealizadas: number = 0;
    private valorBonusPorConsulta: number;

    constructor(nome: string, matricula: string, salario: number, valorBonusPorConsulta: number) {
        super(nome, matricula, salario);
        if (!Number.isFinite(valorBonusPorConsulta) || valorBonusPorConsulta < 0) {
            throw new Error("O bônus por consulta não pode ser negativo.");
        }
        this.valorBonusPorConsulta = valorBonusPorConsulta;
    }

    public getConsultasRealizadas(): number {
        return this.consultasRealizadas;
    }

    public getValorBonusPorConsulta(): number {
        return this.valorBonusPorConsulta;
    }

    public setValorBonusPorConsulta(valor: number): void {
        if (!Number.isFinite(valor) || valor < 0) {
            throw new Error("O bônus por consulta não pode ser negativo.");
        }
        this.valorBonusPorConsulta = valor;
    }

    public registrarConsulta(): void {
        this.consultasRealizadas++;
    }

    public calcularBonusSalarial(): number {
        return this.consultasRealizadas * this.valorBonusPorConsulta;
    }

    public realizarConsulta(): void {
        console.log(`Dr(a). ${this.getNome()} está realizando uma consulta.`);
        this.registrarConsulta();
    }
}