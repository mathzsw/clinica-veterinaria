import { Funcionario } from "./Funcionario.js";

export class Veterinario extends Funcionario {
    private consultasRealizadas: number = 0;
    private valorBonusPorConsulta: number;

    constructor(nome: string, matricula: string, salario: number, valorBonusPorConsulta: number) {
        super(nome, matricula, salario);
        this.valorBonusPorConsulta = valorBonusPorConsulta;
    }

    public getConsultasRealizadas(): number {
        return this.consultasRealizadas;
    }

    public setConsultasRealizadas(quantidade: number): void {
        this.consultasRealizadas = quantidade;
    }

    public getValorBonusPorConsulta(): number {
        return this.valorBonusPorConsulta;
    }

    public setValorBonusPorConsulta(valor: number): void {
        this.valorBonusPorConsulta = valor;
    }

    public realizarConsulta(): void {
        this.consultasRealizadas++;
        console.log("Consulta realizada.");
    }

    public prescreverTratamento(tratamento: string): void {
        console.log("Tratamento prescrito: " + tratamento);
    }

    public calcularBonusSalarial(): number {
        return this.consultasRealizadas * this.valorBonusPorConsulta;
    }
}