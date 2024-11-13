import { useState } from 'react'
import { player, setGameMatriz, isFinished} from './GameManager.jsx'

function Square({playType, boardFunction, borderStyle}){

    return(
        <button className={"GameButton " + borderStyle} onClick={boardFunction}>{playType}</button>
    )
}

export default function Board(){

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [playType, SetType] = useState("X")
    const [borderStyle, setBorderStyle] = useState("PlayerHoverOne")

    function handlePlay(place){
        const newSquares = squares.slice()  

        if(newSquares[place]){ // Verifica se o quadrado está vazio
            return
        }else{
            newSquares[place] = playType
            setSquares(newSquares)

            const newPlayType = playType == "X" ? "O" : "X"
            SetType(newPlayType)

            const newBorderStyle = borderStyle == "PlayerHoverOne" ? "PlayerHoverTwo" : "PlayerHoverOne"
            setBorderStyle(newBorderStyle)
        }

    }

    let squareButtons = []
    for(let place = 0; place < 9; place++){
        squareButtons.push(<Square playType={squares[place]} boardFunction={(e) => handlePlay(place)} borderStyle={borderStyle} />)
    }

    return(
        <div className='GameCanvas'>
            {squareButtons}
        </div>
    )
}