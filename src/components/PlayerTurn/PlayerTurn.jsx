export default function PlayerTurn({type}) {
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