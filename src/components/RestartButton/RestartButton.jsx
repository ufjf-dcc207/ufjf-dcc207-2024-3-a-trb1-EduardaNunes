import "./RestartButton.css"
import { setGameFinished } from "../Board/Board"

export default function RestartButton({setSquares, setWinPos, setType, setBorderStyle, setRestartBtnClass, restartBtnClass, isGameFinished}){

    function RestartGame(){
        setGameFinished()
        setSquares(Array(9).fill(null))
        setWinPos(Array(3).fill(null))
        setType("X")
        setBorderStyle("PlayerHoverOne")
        setRestartBtnClass("Hide")
      }

    return(
        <button className={restartBtnClass} onClick={RestartGame}>Restart</button>
    )
}