import React from "react";

// Componente funcional Square, representa um quadrado no tabuleiro
function Square({ value, onClick }) {
  return (
    // Botão que exibe o valor do quadrado e chama a função onClick ao ser clicado
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

// Exporta o componente Square como padrão
export default Square;

