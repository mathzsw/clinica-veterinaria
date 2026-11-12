import { Animal } from "./Animal.js";

export class Ave extends Animal {
    public emitirSom(): void {
        console.log("Piu piu!"); 
    }

    public cuidadosDiarios(): void {
        console.log("Precisa de gaiola.");
    }
}