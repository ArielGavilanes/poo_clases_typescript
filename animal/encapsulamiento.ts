import { AnimalI } from "./interface/animal-interface";

//TODO: aplicar una interfaz a la clase y crear un metodo estatico
export class Animal implements AnimalI {
    especie: string;
    edad: number;
    color: string;

    constructor(especie: string, edad: number, color: string) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }
    public getEspecie(): string {
        return this.especie; 
    }
    public setEspecie(especie: string): void {
        this.especie = especie;
    }
    public getEdad(): number {
        return this.edad;
    }
    public setEdad(edad: number): void {
        this.edad = edad;
    }
    public getColor(): string {
        return this.color;
    }
    public setColor(color: string): void {
        this.color = color;
    }
}
