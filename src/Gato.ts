import { Animal } from "./Animal.js";

export class Gato extends Animal {
    public emitirSom(): void {
        console.log(`${this.getNome()} mia: Miau!`);
    }

    public cuidadosDiarios(): void {
        console.log(`${this.getNome()} precisa de alimentação, água, higiene e um arranhador.`);
    }
}
