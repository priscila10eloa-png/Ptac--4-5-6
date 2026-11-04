import { useState, useEffect } from "react";

function App() {
  const [hora, setHora] = useState("");
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Efeito executado!");

    setHora(new Date().toLocaleTimeString());
  }, []);

  return (
    <div>
      <h1>Exercício 1 - useEffect</h1>

      <p>Hora do carregamento: {hora}</p>

      <p>Contador: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        Re-renderizar componente
      </button>
    </div>
  );
}

export default App;