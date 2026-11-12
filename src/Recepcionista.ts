import { Funcionario } from "./Funcionario.js";

export class Recepcionista extends Funcionario {
    private agendamentosConfirmados: number = 0;
    private valorBonusPorAgendamento: number;

    constructor(nome: string, matricula: string, salario: number, valorBonusPorAgendamento: number) {
        super(nome, matricula, salario);
        if (!Number.isFinite(valorBonusPorAgendamento) || valorBonusPorAgendamento < 0) {
            throw new Error("O bônus por agendamento não pode ser negativo.");
        }
        this.valorBonusPorAgendamento = valorBonusPorAgendamento;
    }

    public getAgendamentosConfirmados(): number {
        return this.agendamentosConfirmados;
    }

    public getValorBonusPorAgendamento(): number {
        return this.valorBonusPorAgendamento;
    }

    public setValorBonusPorAgendamento(valor: number): void {
        if (!Number.isFinite(valor) || valor < 0) {
            throw new Error("O bônus por agendamento não pode ser negativo.");
        }
        this.valorBonusPorAgendamento = valor;
    }

    public confirmarAgendamento(): void {
        this.agendamentosConfirmados++;
    }

    public calcularBonusSalarial(): number {
        return this.agendamentosConfirmados * this.valorBonusPorAgendamento;
    }

    public agendarConsulta(): void {
        console.log(`A recepcionista ${this.getNome()} agendou uma consulta.`);
    }
}