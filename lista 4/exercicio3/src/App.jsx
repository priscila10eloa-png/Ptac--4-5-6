import { useState } from "react";
import BotoesDeTema from "./BotoesDeTema";
import Previa from "./Previa";

function App() {
  const [tema, setTema] = useState("claro");

  return (
    <div>
      <h1>Escolha seu tema</h1>

      <BotoesDeTema mudarTema={setTema} />

      <Previa tema={tema} />
    </div>
  );
}

export default App;