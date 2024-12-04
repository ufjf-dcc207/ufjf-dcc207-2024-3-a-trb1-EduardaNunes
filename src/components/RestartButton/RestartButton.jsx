import "./RestartButton.css"
import { setGameFinished } from "../Board/Board"

export default function RestartButton({onRestartClick, isGameFinished}){

    return(
        <button data-isGameFinished={isGameFinished} onClick={onRestartClick}>Restart</button>
    )
}