function Previa({ tema }) {
  return (
    <div
      style={{
        backgroundColor: tema === "claro" ? "white" : "black",
        color: tema === "claro" ? "black" : "white",
        padding: "30px",
      }}
    >
      <h2>Prévia do tema</h2>
      <p>Tema atual: {tema}</p>
    </div>
  );
}

export default Previa;