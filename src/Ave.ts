import { Animal } from "./Animal.js";

export class Ave extends Animal {
    public emitirSom(): void {
        console.log(`${this.getNome()} canta!`);
    }

    public cuidadosDiarios(): void {
        console.log(`${this.getNome()} precisa de alimentação adequada, água e uma gaiola limpa e segura.`);
    }
}
