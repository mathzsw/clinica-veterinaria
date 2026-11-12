import { Animal } from "./Animal.js";

export class Cachorro extends Animal {
    public emitirSom(): void {
        console.log("Au au!");
    }

    public cuidadosDiarios(): void {
        console.log("Precisa de passeio diário.");
    }
}