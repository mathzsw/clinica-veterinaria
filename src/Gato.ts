import { Animal } from "./Animal.js";

export class Gato extends Animal {
    public emitirSom(): void {
        console.log("Miau!");
    }

    public cuidadosDiarios(): void {
        console.log("Precisa de arranhador.");
    }
}