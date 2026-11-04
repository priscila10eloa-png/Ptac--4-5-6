export function rotuloDoStatus(status) {
  const statusPedido = {
    pendente: "Aguardando pagamento",
    enviado: "Pedido enviado",
    entregue: "Pedido entregue",
  };

  return statusPedido[status] ?? "Status desconhecido";
}