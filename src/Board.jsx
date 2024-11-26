import { useState } from "react"
import "./GameCanvas.css"

let isGameFinished = false

function Square({ playType, boardFunction, borderStyle }) {
  return (
    <button
      className={`GameButton ${borderStyle} ${playType && "Disabled"}`}
      onClick={boardFunction}
    >
      {playType}
    </button>
  )
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [winPos, setWinPos] = useState(Array(3).fill(null))
  const [playType, SetType] = useState("X")
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
        SetType(newPlayType)

        const newBorderStyle =
          borderStyle == "PlayerHoverOne" ? "PlayerHoverTwo" : "PlayerHoverOne"
        setBorderStyle(newBorderStyle)
      }
    }
  }

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
            <button className={restartBtnClass} onClick={() => RestartGame(squares, setSquares, winPos, setWinPos, SetType, setBorderStyle, setRestartBtnClass)}>Restart</button>
            <div className="Board">{squareButtons}</div>
          </div>
        </>
  )
}

function PlayerTurn({type}) {
  return (
    <div className="PlayerTurn">
      {type === "X" ? (
        <div className="PlayerOne PlayerBox">
          <p>Jogador X</p>
        </div>
      ) : (
        <div className="PlayerTwo PlayerBox">
          <p>Jogador O</p>
        </div>
      )}
    </div>
  )
}

function CheckGameVictory(squares, setWinPos) {
  const possibleWins = [
    [0, 1, 2], // horizontais
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // verticais
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonais
    [2, 4, 6],
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

function RestartGame(squares, setSquares, winPos, setWinPos, SetType, setBorderStyle, setRestartBtnClass){
  isGameFinished = false
  setSquares(squares.fill(null))
  setWinPos(winPos.fill(null))
  SetType("X")
  setBorderStyle("PlayerHoverOne")
  setRestartBtnClass("Hide")
}
