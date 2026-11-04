import Notificacao from "./Notificacao";

function App() {
  const mensagens = [];

  return (
    <div>
      <h1>Notificações</h1>
      <Notificacao mensagens={mensagens} />
    </div>
  );
}

export default App;