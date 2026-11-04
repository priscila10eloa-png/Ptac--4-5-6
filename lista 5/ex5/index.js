async function executar() {
  console.log("Dentro da função");

  await null;

  console.log("Depois do await");
}

console.log("A");

executar();

console.log("B");

// O código depois da chamada da função async continua sendo executado
// enquanto o await pausa a continuação da função
// Por isso, B aparece antes de Depois do await