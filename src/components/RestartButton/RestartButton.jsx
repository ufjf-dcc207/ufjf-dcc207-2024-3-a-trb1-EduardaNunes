import "./RestartButton.css"

export default function RestartButton({onRestartClick, isGameFinished}){

    return(
        <button className="RestartButton" data-isgamefinished={isGameFinished} onClick={onRestartClick}>Restart</button>
    )
}