import { useState } from 'react'
import { getPlayer, setPlayer, setGameMatriz} from './GameManager.jsx'

export default function GameCanvas(){
    return(
      <div className='GameCanvas'>
        <GameButton></GameButton>
        <GameButton></GameButton>
        <GameButton></GameButton>
  
        <GameButton></GameButton>
        <GameButton></GameButton>
        <GameButton></GameButton>
  
        <GameButton></GameButton>
        <GameButton></GameButton>
        <GameButton></GameButton>
      </div>
    )
}

function GameButton(){

    const [playType, SetType] = useState(null)

    function Play(e){
        switch(getPlayer()){
        case 1:
            SetType("X")
            setPlayer(2)
            //setGameMatriz(e.target.column, e.target.row, "X")
            break
        case 2:
            SetType("O")
            setPlayer(1)
            //console.log(e.target.column)
            //setGameMatriz(e.target.column, e.target.row, "O")
            break
        default:
            console.log("Erro, player não existe")
            break
        }
    }

    console.log("return")
    return(
        <button className="GameButton" onClick={Play}>{playType}</button>
    )
}