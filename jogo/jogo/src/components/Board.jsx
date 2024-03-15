import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const currentSquares = history[stepNumber];
  const { winner, line } = calculateWinner(currentSquares);

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const newSquares = current.slice();

    if (winner || newSquares[i]) return;

    newSquares[i] = xIsNext ? "X" : "O";
    setHistory([...newHistory, newSquares]);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };
  //Adicione a função dele voltar um movimento para poder rever a jogada
  const moves = history.map((step, move) => {
    const desc = move ? `Ir para o movimento #${move}` : `Ir para o início`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const isBoardFull = currentSquares.every((square) => square !== null);

  return (
    <div>
      <div className="status">
        {winner ? (
          <p className="winner">O vencedor é: {winner}!</p>
        ) : isBoardFull ? (
            //Adicionei o feedback de empate
          <p className="draw">O jogo terminou em empate!</p>
        ) : (
          <p>Próximo a jogar: {xIsNext ? "X" : "O"}</p>
        )}
      </div>
      <div className="board">
        {[0, 1, 2].map((row) => (
          <div key={row} className="board-row">
            {[0, 1, 2].map((col) => {
              const i = row * 3 + col;
              const highlight = line && line.includes(i);
              return (
                <Square
                  key={i}
                  value={currentSquares[i]}
                  onClick={() => handleClick(i)}
                  highlight={highlight}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
      <button className="reset-button" onClick={() => setStepNumber(0)}>
        Reiniciar Jogo
      </button>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }

  return { winner: null, line: null };
};

export default Board;
