//TODO: con la clase abstracta crear un metodo abstracto
export abstract class Carro {
    private marca: string;
    private año: number;
    private color: string;
  
    constructor(marca: string, año: number, color: string) {
      this.marca = marca;
      this.año = año;
      this.color = color;
    }
  
    public getMarca(): string {
      return this.marca;
    }
  
    public setMarca(marca: string): void {
      this.marca = marca;
    }
  
    public getAño(): number {
      return this.año;
    }
  
    public setAño(año: number): void {
      this.año = año;
    }
  
    public getColor(): string {
      return this.color;
    }
  
    public setColor(color: string): void {
      this.color = color;
    }
  
    public abstract acelerar(): void;
  }
  