import { useState } from 'react'
import GameCanvas from './GameCanvas.jsx'
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