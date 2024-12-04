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

let isGameFinished = false; // Preciso transformar isso em um useState

// Gambiarra temporária

export function setGameFinished() {
  isGameFinished = false;
}

export default function Board() {
  const [game, setGame] = useState(newGame());
  //const [squares, setSquares] = useState()
  //const [winPos, setWinPos] = useState(Array(3).fill(null));
  //const [playType, setType] = useState("X");
  //const [borderStyle, setBorderStyle] = useState("PlayerHoverOne");
  //const [restartBtnClass, setRestartBtnClass] = useState("Hide");

  function handlePlay(place) {
    if (game.squares[place] || isGameFinished) {
      // Verifica se o quadrado está vazio
      return;
    } else {
      const newGame = structuredClone(game);
      newGame.squares[place] = newGame.player;

      checkGameVictory(newGame);
      newGame.player = newGame.player === "X" ? "O" : "X";
      setGame(newGame);

      /*
      if (isGameFinished) {
        setBorderStyle("Disabled");
        setRestartBtnClass("RestartButton");
      } else {
        const newPlayType = playType == "X" ? "O" : "X";
        setType(newPlayType);

        const newBorderStyle =
          borderStyle == "PlayerHoverOne" ? "PlayerHoverTwo" : "PlayerHoverOne";
        setBorderStyle(newBorderStyle);
      }
      */
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
    //const isWinningSquare = winPos.includes(place);
    //const winnerBorder = playType === "X" ? "WinnerOne" : "WinnerTwo";

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
        <div className="Board" disabled={!game.isGameFinished}>{squareButtons}</div>
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
