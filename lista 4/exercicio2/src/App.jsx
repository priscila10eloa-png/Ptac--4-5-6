import { rotuloDoStatus } from "./utils/statusPedido";

function App() {
  return (
    <div>
      <h1>Status do pedido</h1>

      <p>{rotuloDoStatus("pendente")}</p>
      <p>{rotuloDoStatus("enviado")}</p>
      <p>{rotuloDoStatus("entregue")}</p>
      <p>{rotuloDoStatus("cancelado")}</p>
    </div>
  );
}

export default App;