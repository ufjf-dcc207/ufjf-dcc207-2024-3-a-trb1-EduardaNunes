let gameMatriz = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]

export function setGameMatriz(column, row, type){
    gameMatriz[column][row] = type
    GameWin()
}
export let player = 1
