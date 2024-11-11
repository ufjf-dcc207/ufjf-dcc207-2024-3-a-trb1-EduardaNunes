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
export let isFinished = false

function GameWin(){

    if(gameMatriz[0][0] != null  && gameMatriz[0][0] == gameMatriz[1][1] && gameMatriz[0][0] == gameMatriz[2][2]){ // verifica diagonal esquerda
        isFinished = true
        ChangeWinnerButtonsColor(0, 0, 1, 1, 2, 2)

    }else if(gameMatriz[0][2] != null  && gameMatriz[0][2] == gameMatriz[1][1] && gameMatriz[0][2] == gameMatriz[2][0]){ // verifica diagonal direita
        isFinished = true
        ChangeWinnerButtonsColor(0, 2, 1, 1, 2, 0)

    }else{
        for(let i = 0; i < 3; i++){
            if(gameMatriz[i][0] != null && gameMatriz[i][0] == gameMatriz[i][1] && gameMatriz[i][0] == gameMatriz[i][2]){ // verifica vertical
                isFinished = true
                ChangeWinnerButtonsColor(i, 0, i, 1, i, 2)
                break;
            }
            if(gameMatriz[0][i] != null  && gameMatriz[0][i] == gameMatriz[1][i] && gameMatriz[0][i] == gameMatriz[2][i]){ // verifica horizontal
                isFinished = true
                ChangeWinnerButtonsColor(0, i, 1, i, 2, i)
                break;
            }
        }
    }

    if(isFinished){
        disableAllButtons()
        // adicionar animação de vitória
        console.log(`Jogador ${player}, venceu!`)
    }else{
        player = player == 1 ? 2 : 1
    }
}

function disableAllButtons(){
    const buttons = document.querySelectorAll("button")

    buttons.forEach(button => {
        button.disabled = true
        button.classList.remove("Disabled", "PlayerHoverOne", "PlayerHoverTwo")
    })
}

function ChangeWinnerButtonsColor(col1, row1, col2, row2, col3, row3){

    const button1 = document.querySelector(`button[data-column="${col1}"][data-row="${row1}"]`)
    const button2 = document.querySelector(`button[data-column="${col2}"][data-row="${row2}"]`)
    const button3 = document.querySelector(`button[data-column="${col3}"][data-row="${row3}"]`)
    
    const addClass = player == 1 ? "WinnerOne" : "WinnerTwo"

    button1.classList.add(addClass)
    button2.classList.add(addClass)
    button3.classList.add(addClass)

}