for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

console.log("Fim do loop");

// let cria um valor independente do contador para cada repetição
// garantindo que cada callback mostre seu próprio número