import Emissor from "./Emissor";
import Ouvinte from "./Ouvinte";

function App() {
  return (
    <div>
      <h1>Exercício 3 - Event Bus</h1>

      <Emissor />

      <Ouvinte />
    </div>
  );
}

export default App;