import { Animal } from "./encapsulamiento"; 

class Gato extends Animal {
    private raza: string;

    constructor(especie: string, edad: number, color: string, raza: string) {
        super(especie, edad, color);
        this.raza = raza;
    }

    public getRaza(): string {
        return this.raza;
    }

    public setRaza(raza: string): void {
        this.raza = raza;
    }

    public presentar(): string {
        return `Soy un gato de raza ${this.raza}, y mi color es ${this.getColor()}.`;
    }
}
class Perro extends Animal {
    private raza: string;
    private tamano: string;

    constructor(especie: string, edad: number, color: string, raza: string, tamano: string) {
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

    public presentar(): string {
        return `Soy un perro de raza ${this.raza}, de tamaño ${this.tamano}, y mi color es ${this.getColor()}.`;
    }
}

function presentarAnimal(animal: Animal): string {
    if (animal instanceof Perro) {
        return animal.presentar();
    } else if (animal instanceof Gato) {
        return animal.presentar();
    } else {
        return `Soy un animal de la especie ${animal.getEspecie()}, color ${animal.getColor()}, y tengo ${animal.getEdad()} años.`;
    }
}

export { Perro, Gato, presentarAnimal };
