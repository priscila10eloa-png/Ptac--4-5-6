import { emit } from "./eventos/eventBus";

function Emissor() {
  function enviarMensagem() {
    emit("novaMensagem", "Olá! Evento recebido!");
  }

  return (
    <div>
      <h2>Emissor</h2>

      <button onClick={enviarMensagem}>
        Enviar evento
      </button>
    </div>
  );
}

export default Emissor;