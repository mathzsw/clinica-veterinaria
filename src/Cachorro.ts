import { Animal } from "./Animal.js";

export class Cachorro extends Animal {
    public emitirSom(): void {
        console.log(`${this.getNome()} late: Au au!`);
    }

    public cuidadosDiarios(): void {
        console.log(`${this.getNome()} precisa de alimentação, água, higiene e passeios diários.`);
    }
}
