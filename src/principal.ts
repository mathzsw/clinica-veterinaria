import { Cachorro } from "./Cachorro.js";
import { Gato } from "./Gato.js";
import { Ave } from "./Ave.js";
import { Veterinario } from "./Veterinario.js";
import { Recepcionista } from "./Recepcionista.js";
import { Clinica } from "./Clinica.js";
import { Consulta } from "./Consulta.js";

const clinica = new Clinica();

const cachorro = new Cachorro("Rex", 4, "João");
const gato = new Gato("Mimi", 2, "Ana");
const ave = new Ave("Loro", 1, "Carlos");

const veterinario = new Veterinario("Marcos", "VET001", 3500, 25);
const recepcionista = new Recepcionista("Julia", "REC001", 1800, 5);

clinica.adicionarAnimal(cachorro);
clinica.adicionarAnimal(gato);
clinica.adicionarAnimal(ave);
clinica.adicionarFuncionario(veterinario);
clinica.adicionarFuncionario(recepcionista);

cachorro.emitirSom();
cachorro.cuidadosDiarios();
gato.emitirSom();
gato.cuidadosDiarios();
ave.emitirSom();
ave.cuidadosDiarios();

const consulta = new Consulta(cachorro, veterinario, new Date());
veterinario.realizarConsulta();
recepcionista.agendarConsulta();
recepcionista.confirmarAgendamento();

console.log("Consulta:", consulta.getData().toLocaleDateString());
console.log("Bônus do veterinário:", veterinario.calcularBonusSalarial());
console.log("Bônus da recepcionista:", recepcionista.calcularBonusSalarial());
console.log("Animais cadastrados:", clinica.listarAnimais().length);
console.log("Funcionários cadastrados:", clinica.listarFuncionarios().length);
