import { useState } from 'react'
import { player, setGameMatriz, isFinished} from './GameManager.jsx'

export default function GameCanvas(){

    let gameButtons = []

    for(let row = 0; row < 3; row++){
        for(let col = 0; col < 3; col++){
            gameButtons.push(<GameButton column={col} row={row} />)
        }
    }

    return(
        <div className='GameCanvas'>
            {gameButtons}
        </div>
    )
}

function GameButton({column, row}){

    const [playType, SetType] = useState(null)

    function Play(e){
        switch(player){
        case 1:
            SetType("X")
            setGameMatriz(e.target.dataset.column, e.target.dataset.row, "X")
            break
        case 2:
            SetType("O")
            setGameMatriz(e.target.dataset.column, e.target.dataset.row, "O")
            break
        default:
            console.log("Erro, player não existe")
            break
        }

        if(!isFinished){
            DisableButton(e.target)
            TogglePlayerColor()
        }
    }

    return(
        <button data-column={column} data-row={row} className="GameButton PlayerHoverOne" onClick={Play}>{playType}</button>
    )
}

function DisableButton(button){
    button.disabled = true
    button.classList.add("Disabled")
}

function TogglePlayerColor(){
    const buttons = document.querySelectorAll("button")

    buttons.forEach(button =>{
        button.classList.toggle("PlayerHoverOne")
        button.classList.toggle("PlayerHoverTwo")
    })
}