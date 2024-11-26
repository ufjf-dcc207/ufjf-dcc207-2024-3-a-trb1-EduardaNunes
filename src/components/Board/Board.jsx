import { useState } from "react"
import "./Board.css"
import PlayerTurn from "../PlayerTurn/PlayerTurn"
import Square from "../Square/Square"
import RestartButton from "../RestartButton/RestartButton"

let isGameFinished = false // Preciso transformar isso em um useState

// Gambiarra temporária

export function setGameFinished(){
  isGameFinished = false;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [winPos, setWinPos] = useState(Array(3).fill(null))
  const [playType, setType] = useState("X")
  const [borderStyle, setBorderStyle] = useState("PlayerHoverOne")
  const [restartBtnClass, setRestartBtnClass] = useState("Hide")

  function handlePlay(place) {
    if (squares[place] || isGameFinished) {
      // Verifica se o quadrado está vazio
      return
    } else {
      const newSquares = squares.slice()
      newSquares[place] = playType
      setSquares(newSquares)

      CheckGameVictory(newSquares, setWinPos)

      if (isGameFinished) {
        setBorderStyle("Disabled")
        setRestartBtnClass("RestartButton")
      } else {
        const newPlayType = playType == "X" ? "O" : "X"
        setType(newPlayType)

        const newBorderStyle =
          borderStyle == "PlayerHoverOne" ? "PlayerHoverTwo" : "PlayerHoverOne"
        setBorderStyle(newBorderStyle)
      }
    }
  }

  // implementação do .map para encurtar o código
  const squareButtons = squares.map((square, place) => {
    const isWinningSquare = winPos.includes(place)
    const winnerBorder = playType === "X" ? "WinnerOne" : "WinnerTwo"

    return(
      <Square
        key={`place: ${place}`}
        playType={square}
        boardFunction={() => handlePlay(place)}
        borderStyle={isWinningSquare ? winnerBorder : borderStyle}
      />   
    )
  })

  return (
        <>
          <PlayerTurn type={playType}/>
          <div className="GameCanvas">
            <RestartButton
              setSquares={setSquares}
              setWinPos={setWinPos}
              setType={setType}
              setBorderStyle={setBorderStyle}
              setRestartBtnClass={setRestartBtnClass}
              restartBtnClass={restartBtnClass}
              isGameFinished={isGameFinished}
            />
            <div className="Board">{squareButtons}</div>
          </div>
        </>
  )
}

function CheckGameVictory(squares, setWinPos) {
  const possibleWins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontais
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticais
    [0, 4, 8], [2, 4, 6],            // Diagonais
  ]

  possibleWins.forEach((pos) => {
    if (
      squares[pos[0]] != null &&
      squares[pos[0]] == squares[pos[1]] &&
      squares[pos[0]] == squares[pos[2]]
    ) {
      console.log("Venceu")
      isGameFinished = true
      setWinPos(pos)
    }
  })

  if(squares.every((square) => square != null)){
    isGameFinished = true;
  }
}
