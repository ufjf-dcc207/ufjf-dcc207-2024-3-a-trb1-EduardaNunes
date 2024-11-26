import Board from '../Board/Board.jsx'

export default function App() {
  return (
    <>
        <Header/>
        <Board/>
    </>
  )
}

function Header(){
  return(
    <h1>Super Tic Tac Toe</h1>
  )
}