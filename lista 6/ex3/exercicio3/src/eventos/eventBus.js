const eventos = {};

export function subscribe(nome, callback) {
  if (!eventos[nome]) {
    eventos[nome] = [];
  }

  eventos[nome].push(callback);

  return () => {
    eventos[nome] = eventos[nome].filter(
      (funcao) => funcao !== callback
    );
  };
}

export function emit(nome, dados) {
  if (eventos[nome]) {
    eventos[nome].forEach((callback) => callback(dados));
  }
}