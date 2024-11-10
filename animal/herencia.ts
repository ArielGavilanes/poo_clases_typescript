import { Animal } from "./encapsulamiento";

export class Perro extends Animal {
    private raza: string;
    private tamano: string;

    constructor (especie:string, edad: number, color: string, raza: string, tamano: string) {
        super(especie, edad, color);
        this.raza = raza;
        this.tamano = tamano;
    }
    
    public getRaza(): string {
        return this.raza;
    }
    public setRaza(raza: string): void {
        this.raza = raza;
    }

    public getTamano(): string {
        return this.tamano;
    }
    public setTamano(tamano: string): void {
        this.tamano = tamano;
    }
}
