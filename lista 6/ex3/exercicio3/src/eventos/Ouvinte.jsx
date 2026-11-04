import { useState, useEffect } from "react";
import { subscribe } from "./eventos/eventBus";

function Ouvinte() {
  const [mensagem, setMensagem] = useState("Aguardando evento...");

  useEffect(() => {
    const cancelar = subscribe("novaMensagem", (dados) => {
      setMensagem(dados);
    });

    return cancelar;
  }, []);

  return (
    <div>
      <h2>Ouvinte</h2>

      <p>{mensagem}</p>
    </div>
  );
}

export default Ouvinte;