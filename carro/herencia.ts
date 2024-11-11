import { Carro } from "./encapsulamiento";

export class cDeportivo extends Carro {
  private velocidadMax: number;

  constructor(marca: string, año: number, color: string, velocidadMax: number) {
    super(marca, año, color);
    this.velocidadMax = velocidadMax;
  }

  public getVelocidadMax(): number {
    return this.velocidadMax;
  }

  public setVelocidadMax(velocidadMax: number): void {
    this.velocidadMax = velocidadMax;
  }

  public presentarcDeportivo(): string {
    return `El carro deportivo es ${this.getMarca()} y su velocidad máxima es ${this.velocidadMax} km/h.`;
  }

  public acelerar(): void {
    console.log(`${this.getMarca()} acelera a toda velocidad, alcanzando los ${this.velocidadMax} km/h.`);
  }
}
