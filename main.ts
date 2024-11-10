//TODO: hacer aqui las instancias de las clases
import { cDeportivo } from "./carro/herencia"; 
import { Clasico, presentarCarro } from "./carro/polimorfismo";

const deportivo = new cDeportivo("Ferrari", 2024, "Rojo", 350);
const clasico = new Clasico("Ford", 1965, "Negro", "Muscle");

console.log(presentarCarro(deportivo));
console.log(presentarCarro(clasico));

deportivo.acelerar();
clasico.acelerar();   