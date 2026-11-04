import { useEffect } from "react";

function Mensagem({ texto }) {
  useEffect(() => {
    console.log("A mensagem mudou:", texto);
  }, [texto]);

  return (
    <div>
      <h2>{texto}</h2>
    </div>
  );
}

export default Mensagem;