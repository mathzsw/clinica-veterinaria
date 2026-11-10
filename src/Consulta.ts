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
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
    }

    public getAnimal(): Animal {
        return this.animal;
    }

    public getVeterinario(): Veterinario {
        return this.veterinario;
    }

    public getData(): Date {
        return this.data;
    }
}
