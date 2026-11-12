import { Animal } from "./Animal.js";
import { Veterinario } from "./Veterinario.js";

export class Consulta {
    private animal: Animal;
    private veterinario: Veterinario;
    private data: Date;

    constructor(animal: Animal, veterinario: Veterinario, data: Date) {
        if (!animal || !veterinario) {
            throw new Error("Uma consulta precisa de um animal e de um veterinário.");
        }
        if (!(data instanceof Date) || Number.isNaN(data.getTime())) {
            throw new Error("A data da consulta é inválida.");
        }
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = new Date(data);
    }

    public getAnimal(): Animal {
        return this.animal;
    }

    public setAnimal(animal: Animal): void {
        if (!animal) throw new Error("A consulta precisa de um animal.");
        this.animal = animal;
    }

    public getVeterinario(): Veterinario {
        return this.veterinario;
    }

    public setVeterinario(veterinario: Veterinario): void {
        if (!veterinario) throw new Error("A consulta precisa de um veterinário.");
        this.veterinario = veterinario;
    }

    public getData(): Date {
        return new Date(this.data);
    }

    public setData(data: Date): void {
        if (!(data instanceof Date) || Number.isNaN(data.getTime())) {
            throw new Error("A data da consulta é inválida.");
        }
        this.data = new Date(data);
    }
}