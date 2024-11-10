import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <>
        <Header></Header>
        <GameCanvas></GameCanvas>
    </>
  )
}

function Header(){
  return(
    <h1>Super Tic Tac Toe</h1>
  )
}

let gameMatriz = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

let player = 1;

function GameCanvas(){
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

  const [playStatus, SetStatus] = useState(" ");

  const Play = () => {
    switch(player){
      case 1:
        SetStatus("X")
        player = 2
        break
      case 2:
        SetStatus("O")
        player = 1
        break
      default:
        console.log("Erro, player não existe")
        break
    }
  }

  return(
    <button onClick={Play}>{playStatus}</button>
  )
}
