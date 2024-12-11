import "./Square.css"

export default function Square({ player, boardFunction, isWinner }) {
  console.log(player !== null)
    return (
      <button
        className={`GameButton`}
        onClick={boardFunction}
        data-isWinner={isWinner}
        data-player={player}
        disabled={player !== null}
      >
        {player}
      </button>
    )
  }