import GameCanvas from './GameCanvas.jsx'
import './App.css'

export default function App() {
  return (
    <>
        <Header></Header>
        <PlayerTurn />
        <GameCanvas></GameCanvas>
    </>
  )
}

function Header(){
  return(
    <h1>Super Tic Tac Toe</h1>
  )
}

function PlayerTurn(){
  return(
    <div className='PlayerTurn'>
      <div className='PlayerOne PlayerBox'><p>Jogador X</p></div>
      <div className='PlayerTwo PlayerBox'><p>Jogador O</p></div>
    </div>
  )
}