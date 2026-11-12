import { Animal } from "./Animal.js";
import { Veterinario } from "./Veterinario.js";

export class Consulta {
    private animal: Animal;
    private veterinario: Veterinario;
    private data: Date;

    constructor(animal: Animal, veterinario: Veterinario, data: Date) {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
    }

    public getAnimal(): Animal {
        return this.animal;
    }

    public setAnimal(animal: Animal): void {
        this.animal = animal;
    }

    public getVeterinario(): Veterinario {
        return this.veterinario;
    }

    public setVeterinario(veterinario: Veterinario): void {
        this.veterinario = veterinario;
    }

    public getData(): Date {
        return this.data;
    }

    public setData(data: Date): void {
        this.data = data;
    }
}