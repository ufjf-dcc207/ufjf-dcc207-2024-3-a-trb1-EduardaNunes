import "./Square.css"

export default function Square({ player, boardFunction, isWinner }) {
    return (
      <button
        className={`GameButton`}
        onClick={boardFunction}
        data-iswinner={isWinner}
        data-player={player}
        disabled={player !== null}
      >
        {player}
      </button>
    )
  }