import { useState } from "react";
import "./Board.css";
import PlayerTurn from "../PlayerTurn/PlayerTurn";
import Square from "../Square/Square";
import RestartButton from "../RestartButton/RestartButton";

const POSSIBLE_WINS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Horizontais
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Verticais
  [0, 4, 8],
  [2, 4, 6], // Diagonais
];

export default function Board() {
  const [game, setGame] = useState(newGame());

  function handlePlay(place) {
    if (game.squares[place] || game.isGameFinished) {
      return;
    } else {
      const newGame = structuredClone(game);
      newGame.squares[place] = newGame.player;

      checkGameVictory(newGame);
      newGame.player = newGame.player === "X" ? "O" : "X";
      setGame(newGame);
    }
  }

  function newGame(){
    return {
      squares: Array(9).fill(null),
      isGameFinished: false,
      winPos: null,
      player: "X",
    }
  }
  function restart(){
    setGame(newGame());
  }

  // implementação do .map para encurtar o código
  const squareButtons = game.squares.map((square, place) => {
    let isWinner = false;
    if(game.isGameFinished){
      isWinner = POSSIBLE_WINS[game.winPos].includes(place);
    }

    return (
      <Square
        key={`place: ${place}`}
        player={square}
        boardFunction={() => handlePlay(place)}
        isWinner={isWinner}
      />
    );
  });

  return (
    <>
      <PlayerTurn type={game.player} />
      <div className="GameCanvas">
        <RestartButton
          onRestartClick={restart}
          isGameFinished={game.isGameFinished}
        />
        <div className="Board" data-player={game.player} disabled={!game.isGameFinished}>{squareButtons}</div>
      </div>
    </>
  );
}

function checkGameVictory(game) {
  try {
    POSSIBLE_WINS.forEach((pos, k) => {
      if (
        game.squares[pos[0]] != null &&
        game.squares[pos[0]] == game.squares[pos[1]] &&
        game.squares[pos[0]] == game.squares[pos[2]]
      ) {
        console.log("Venceu");
        game.isGameFinished = true;
        game.winPos = k;
        throw new Error();
      }
    });
  } catch (e) {
    return
  }

  if (game.squares.every((square) => square != null)) {
    game.isGameFinished = true;
  }
}
