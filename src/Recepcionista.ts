import { Funcionario } from "./Funcionario.js";

export class Recepcionista extends Funcionario {
    private agendamentosConfirmados: number = 0;
    private valorBonusPorAgendamento: number;

    constructor(nome: string, matricula: string, salario: number, valorBonusPorAgendamento: number) {
        super(nome, matricula, salario);
        this.valorBonusPorAgendamento = valorBonusPorAgendamento;
    }

    public getAgendamentosConfirmados(): number {
        return this.agendamentosConfirmados;
    }

    public setAgendamentosConfirmados(quantidade: number): void {
        this.agendamentosConfirmados = quantidade;
    }

    public getValorBonusPorAgendamento(): number {
        return this.valorBonusPorAgendamento;
    }

    public setValorBonusPorAgendamento(valor: number): void {
        this.valorBonusPorAgendamento = valor;
    }

    public agendarConsulta(): void {
        console.log("Consulta agendada.");
    }

    public confirmarAgendamento(): void {
        this.agendamentosConfirmados++;
    }

    public calcularBonusSalarial(): number {
        return this.agendamentosConfirmados * this.valorBonusPorAgendamento;
    }
}