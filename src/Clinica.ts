import { Animal } from "./Animal.js";
import { Funcionario } from "./Funcionario.js";

export class Clinica {
    private animais: Animal[] = [];
    private funcionarios: Funcionario[] = [];

    public getAnimais(): Animal[] {
        return this.animais;
    }

    public setAnimais(animais: Animal[]): void {
        this.animais = animais;
    }

    public getFuncionarios(): Funcionario[] {
        return this.funcionarios;
    }

    public setFuncionarios(funcionarios: Funcionario[]): void {
        this.funcionarios = funcionarios;
    }

    public adicionarAnimal(animal: Animal): void {
        this.animais.push(animal);
    }

    public adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }
}