function BotoesDeTema({ mudarTema }) {
  return (
    <div>
      <button onClick={() => mudarTema("claro")}>
        Tema claro
      </button>

      <button onClick={() => mudarTema("escuro")}>
        Tema escuro
      </button>
    </div>
  );
}

export default BotoesDeTema;