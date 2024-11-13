import { useState } from 'react'
//import { CheckGameVictory } from './GameManager.jsx'

let isGameFinished = false

function Square({playType, boardFunction, borderStyle}){
    const [isDisabled, setIsDisabled] = useState("")

    function handleClick(){
        boardFunction()
        setIsDisabled("Disabled")
    }

    return(
        <button className={"GameButton " + borderStyle + " " + isDisabled} onClick={handleClick}>{playType}</button>
    )
}

export default function Board(){

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [playType, SetType] = useState("X")
    const [borderStyle, setBorderStyle] = useState("PlayerHoverOne")

    function handlePlay(place){ 

        if(squares[place] || isGameFinished){ // Verifica se o quadrado está vazio
            return
        }else{

            const newSquares = squares.slice() 
            newSquares[place] = playType
            setSquares(newSquares)

            CheckGameVictory(newSquares)

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

function CheckGameVictory(squares){
    const possibleWins = [
        [0, 1, 2], // horizontais
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], // verticais
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], // diagonais
        [2, 4, 6]
    ]

    possibleWins.forEach(pos => {
        if(squares[pos[0]] != null && squares[pos[0]] == squares[pos[1]] && squares[pos[0]] == squares[pos[2]]){
            console.log("Venceu")
            isGameFinished = true
        }
    })
}