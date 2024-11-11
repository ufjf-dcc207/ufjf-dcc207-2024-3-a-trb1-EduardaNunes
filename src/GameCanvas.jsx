import { useState } from 'react'
import { getPlayer, setPlayer, setGameMatriz, isFinished} from './GameManager.jsx'

export default function GameCanvas(){
    return(
        <div className='GameCanvas'>
            <GameButton column={0} row={0} />
            <GameButton column={1} row={0} />
            <GameButton column={2} row={0} />

            <GameButton column={0} row={1} />
            <GameButton column={1} row={1} />
            <GameButton column={2} row={1} />

            <GameButton column={0} row={2} />
            <GameButton column={1} row={2} />
            <GameButton column={2} row={2} />
        </div>
    )
}

function GameButton({column, row}){

    const [playType, SetType] = useState(null)

    function Play(e){
        switch(getPlayer()){
        case 1:
            SetType("X")
            setGameMatriz(e.target.dataset.column, e.target.dataset.row, "X")
            setPlayer(2)
            break
        case 2:
            SetType("O")
            setGameMatriz(e.target.dataset.column, e.target.dataset.row, "O")
            setPlayer(1)
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