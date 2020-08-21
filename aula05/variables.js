// Declarando variável, não é legal fazer dessa forma
var nome = "Gustavo";
nome = "Paulo";

let idade = 18;
let salario = 1550.35;
let sexo = "M";

console.log(nome, idade, salario, sexo);

// Avaliando a natureza de Constantes
const jeitoCerto = typeof idade;

console.log(
  "Valor da constante quando o dado de referência é numero:",
  jeitoCerto
);

idade = "Breno";

console.log(
  "Valor da constante quando o dado de referência é string:",
  jeitoCerto
);
