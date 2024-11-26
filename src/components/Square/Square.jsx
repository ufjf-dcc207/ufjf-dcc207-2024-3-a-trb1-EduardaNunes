import "./Square.css"

export default function Square({ playType, boardFunction, borderStyle }) {
    return (
      <button
        className={`GameButton ${borderStyle} ${playType && "Disabled"}`}
        onClick={boardFunction}
      >
        {playType}
      </button>
    )
  }