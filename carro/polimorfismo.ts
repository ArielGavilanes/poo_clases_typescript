import { Carro } from "./encapsulamiento";
import { cDeportivo } from "./herencia";

export class Clasico extends Carro {
  private categoria: string;

  constructor(marca: string, año: number, color: string, categoria: string) {
    super(marca, año, color);
    this.categoria = categoria;
  }

  public getCategoria(): string {
    return this.categoria;
  }

  public setCategoria(categoria: string): void {
    this.categoria = categoria;
  }

  public presentarClasico(): string {
    return `La marca del clásico es ${this.getMarca()} y la categoría es ${this.categoria}.`;
  }

  public acelerar(): void {
    console.log(`${this.getMarca()} acelera de forma suave, típico de un carro clásico.`);
  }
}

export function presentarCarro(carro: Carro): string {
  if (carro instanceof cDeportivo) {
    return carro.presentarcDeportivo();
  } else if (carro instanceof Clasico) {
    return carro.presentarClasico();
  } else {
    return `La marca del carro es ${carro.getMarca()}, color ${carro.getColor()}, y su año es ${carro.getAño()}.`;
  }
}
