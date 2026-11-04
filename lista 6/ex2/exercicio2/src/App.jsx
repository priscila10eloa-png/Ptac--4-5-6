import { useState } from "react";
import Mensagem from "./Mensagem";

function App() {
  const [texto, setTexto] = useState("Olá!");

  return (
    <div>
      <h1>Exercício 2 - Dependências</h1>

      <Mensagem texto={texto} />

      <button onClick={() => setTexto("Nova mensagem!")}>
        Mudar mensagem
      </button>

      <button onClick={() => setTexto("Olá!")}>
        Voltar mensagem
      </button>
    </div>
  );
}

export default App;