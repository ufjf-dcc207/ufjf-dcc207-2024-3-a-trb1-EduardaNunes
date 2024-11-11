let gameMatriz = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]
  
let player = 1

export function getPlayer(){
    return player
}

export function setPlayer(newValue){
    player = newValue
}

export function setGameMatriz(column, row, type){
    gameMatriz[column][row] = type
    GameWin()
}

function GameWin(){
    let isFinished = false

    for(let i = 0; i < 3; i++){
        if(gameMatriz[i][0] != null && gameMatriz[i][0] == gameMatriz[i][1] && gameMatriz[i][0] == gameMatriz[i][2]){ // verifica vertical
            isFinished = true
            break;
        }
        if(gameMatriz[0][i] != null  && gameMatriz[0][i] == gameMatriz[1][i] && gameMatriz[0][i] == gameMatriz[2][i]){ // verifica horizontal
            isFinished = true
            break;
        }
    }

    if(gameMatriz[0][0] != null  && gameMatriz[0][0] == gameMatriz[1][1] && gameMatriz[0][0] == gameMatriz[2][2]){ // verifica diagonal esquerda
        isFinished = true
    }else if(gameMatriz[0][2] != null  && gameMatriz[0][2] == gameMatriz[1][1] && gameMatriz[0][2] == gameMatriz[2][0]){ // verifica diagonal direita
        isFinished = true
    }

    if(isFinished){
        disableAllButtons()
        console.log(`Jogador ${player}, venceu!`)
    }
}

function disableAllButtons(){
    const buttons = document.querySelectorAll("button")

    buttons.forEach(button => {
        button.disabled = true
    })
}