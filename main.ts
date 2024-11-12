//TODO: hacer aqui las instancias de las clases
import { Animal } from "./animal/encapsulamiento";
import { Perro } from "./animal/herencia";
import { Gato, presentarAnimal } from "./animal/polimorfismo";
import { cDeportivo } from "./carro/herencia";
import { Clasico, presentarCarro } from "./carro/polimorfismo";
import { Persona } from './persona/encapsulamiento';
import { Estudiante } from './persona/herencia';
import { Profesor, presentarPersona } from './persona/polimorfismo';

// Crear instancias de Animal, Perro y Gato
const animal = new Animal("Loro", 2, "Verde");
console.log(
  `Animal: ${animal.getEspecie()}, ${animal.getEdad()} años, Color: ${animal.getColor()}`
);

const perro = new Perro("Perro", 5, "Marrón", "Golden Retriever", "Grande");
console.log(
  `Perro: ${perro.getEspecie()}, ${perro.getEdad()}, Color: ${perro.getColor()} años, Raza: ${perro.getRaza()}, Tamaño: ${perro.getTamano()}`
);

const gato = new Gato("Gato", 3, "Gris", "Siames");
console.log(
  `Gato: ${gato.getEspecie()}, ${gato.getEdad()} años, Color: ${gato.getColor()}, Raza: ${gato.getRaza()}`
);

console.log(presentarAnimal(animal)); // Presentación del animal (especie, edad, color)
console.log(presentarAnimal(perro)); // Presentación del perro (con raza, tamaño y color)
console.log(presentarAnimal(gato)); // Presentación del gato (con raza y color)

//Instancias de clase carro
const deportivo = new cDeportivo("Ferrari", 2024, "Rojo", 350);
const clasico = new Clasico("Ford", 1965, "Negro", "Muscle");

console.log(presentarCarro(deportivo));
console.log(presentarCarro(clasico));

deportivo.acelerar();
clasico.acelerar();

const persona = new Persona('Carlos', 30);
console.log(`Persona: ${persona.getNombre()}, ${persona.getEdad()} años`);

const estudiante = new Estudiante('Ana', 22, '2022001');
console.log(`Estudiante: ${estudiante.getNombre()}, ${estudiante.getEdad()} años, Matrícula: ${estudiante.getMatricula()}`);

const profesor = new Profesor('Luis', 40, 'Matemáticas');
console.log(`Profesor: ${profesor.getNombre()}, ${profesor.getEdad()} años, Materia: ${profesor.getMateria()}`);

console.log(presentarPersona(persona));
console.log(presentarPersona(estudiante));
console.log(presentarPersona(profesor));
