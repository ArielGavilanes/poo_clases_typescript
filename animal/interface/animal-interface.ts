export interface AnimalI {
    especie: string;
    edad: number;
    color: string;

    // Métodos para obtener y establecer las propiedades
    getEspecie(): string;
    setEspecie(especie: string): void;

    getEdad(): number;
    setEdad(edad: number): void;

    getColor(): string;
    setColor(color: string): void;
}
